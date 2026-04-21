
let loves = 0;

export async function GET() {
    return Response.json({ loves });
}

export async function POST(request) {
    const payload = await request.json();
    const amount =
        typeof payload.amount === 'number' ?
            payload.amount
            :
            1
        ;
    
    console.log(typeof payload.amount);
    console.log(payload.amount);

    loves += amount;
    return Response.json({ loves });
}
