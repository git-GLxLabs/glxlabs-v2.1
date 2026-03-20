import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const allowedOrigins = [
  'https://glxlabs.com',
  'https://www.glxlabs.com',
  'https://glxlab805.lovable.app',
  'http://localhost:5173',
  'http://localhost:8080',
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get('origin') || '';
  return {
    'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : allowedOrigins[0],
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
  };
}

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { postUrl } = await req.json();
    
    if (!postUrl || typeof postUrl !== 'string') {
      throw new Error('Valid post URL is required');
    }

    // Validate URL format
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(postUrl);
    } catch {
      throw new Error('Invalid URL format');
    }

    // Whitelist only glxlabs.substack.com
    if (parsedUrl.hostname !== 'glxlabs.substack.com') {
      throw new Error('Only GLxLabs Substack posts are allowed');
    }

    console.log('Fetching post from allowed domain');

    const rssUrl = 'https://glxlabs.substack.com/feed';

    const rssResponse = await fetch(rssUrl);
    if (!rssResponse.ok) {
      throw new Error('Failed to fetch RSS feed');
    }

    const rssText = await rssResponse.text();

    const itemMatches = rssText.matchAll(/<item[^>]*>([\s\S]*?)<\/item>/g);
    let postContent = null;
    
    for (const itemMatch of itemMatches) {
      const itemContent = itemMatch[1];
      
      const linkMatch = itemContent.match(/<link[^>]*>(.*?)<\/link>/);
      const guidMatch = itemContent.match(/<guid[^>]*>(.*?)<\/guid>/);
      const link = linkMatch?.[1]?.trim();
      const guid = guidMatch?.[1]?.trim();
      
      if (link === postUrl || guid === postUrl || link?.includes(postUrl.split('/').pop()) || guid?.includes(postUrl.split('/').pop())) {
        const titleMatch = itemContent.match(/<title[^>]*><!\[CDATA\[(.*?)\]\]><\/title>|<title[^>]*>(.*?)<\/title>/);
        const title = (titleMatch?.[1] || titleMatch?.[2])?.trim();
        
        const contentEncodedMatch = itemContent.match(/<content:encoded[^>]*><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
        const descriptionMatch = itemContent.match(/<description[^>]*><!\[CDATA\[([\s\S]*?)\]\]><\/description>|<description[^>]*>([\s\S]*?)<\/description>/);
        const content = contentEncodedMatch?.[1] || descriptionMatch?.[1] || descriptionMatch?.[2];
        
        const pubDateMatch = itemContent.match(/<pubDate[^>]*>(.*?)<\/pubDate>/);
        const pubDate = pubDateMatch?.[1]?.trim();
        
        postContent = {
          title: title || 'Untitled',
          content: content || '',
          pubDate,
          author: 'Graeme Lowry',
          url: link || guid || postUrl
        };
        break;
      }
    }

    if (!postContent && itemMatches.length > 0) {
      const firstItem = Array.from(itemMatches)[0];
      if (firstItem) {
        const itemContent = firstItem[1];
        
        const titleMatch = itemContent.match(/<title[^>]*><!\[CDATA\[(.*?)\]\]><\/title>|<title[^>]*>(.*?)<\/title>/);
        const title = (titleMatch?.[1] || titleMatch?.[2])?.trim();
        
        const contentEncodedMatch = itemContent.match(/<content:encoded[^>]*><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
        const descriptionMatch = itemContent.match(/<description[^>]*><!\[CDATA\[([\s\S]*?)\]\]><\/description>|<description[^>]*>([\s\S]*?)<\/description>/);
        const content = contentEncodedMatch?.[1] || descriptionMatch?.[1] || descriptionMatch?.[2];
        
        const pubDateMatch = itemContent.match(/<pubDate[^>]*>(.*?)<\/pubDate>/);
        const pubDate = pubDateMatch?.[1]?.trim();
        
        const linkMatch = itemContent.match(/<link[^>]*>(.*?)<\/link>/);
        const link = linkMatch?.[1]?.trim();
        
        postContent = {
          title: title || 'Latest Post',
          content: content || '',
          pubDate,
          author: 'Graeme Lowry',
          url: link || postUrl
        };
      }
    }

    if (!postContent) {
      throw new Error('Could not find the specified post');
    }

    return new Response(JSON.stringify(postContent), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in fetch-substack function:', error);
    return new Response(JSON.stringify({ 
      error: 'Unable to load article. Please try again later.'
    }), {
      status: 500,
      headers: { ...getCorsHeaders(req), 'Content-Type': 'application/json' },
    });
  }
});
