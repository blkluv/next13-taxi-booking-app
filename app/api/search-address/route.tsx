import { NextResponse } from "next/server";

const { uuid } = require('uuidv4');

const session_token = uuid();

const BASE_URL = 'https://api.mapbox.com/search/searchbox/v1/suggest';

export async function GET(request: any) {
    // Fetch the URL
    const { searchParams } = new URL(request.nextUrl);
    // Extract the query parameter from the URL
    const searchText = searchParams.get('q');

    const res = await fetch(BASE_URL+'?q='+searchText+'?language=en&limit=8&session_token='+session_token+'&country=US&access_token='+process.env.MAPBOX_ACCESS_TOKEN,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

    const searchResult = await res.json();

    return NextResponse.json(searchResult)
}