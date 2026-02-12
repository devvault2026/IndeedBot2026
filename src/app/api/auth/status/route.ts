import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    const { userId } = await auth();

    if (!userId) {
        return NextResponse.json(
            { isAuthenticated: false },
            {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*', // Adjust this to your extension's ID in production
                    'Access-Control-Allow-Methods': 'GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                }
            }
        );
    }

    const user = await currentUser();

    return NextResponse.json(
        {
            isAuthenticated: true,
            user: {
                id: user?.id,
                email: user?.emailAddresses[0]?.emailAddress,
                firstName: user?.firstName,
                lastName: user?.lastName,
                imageUrl: user?.imageUrl,
            }
        },
        {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        }
    );
}

// Handle preflight requests
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}
