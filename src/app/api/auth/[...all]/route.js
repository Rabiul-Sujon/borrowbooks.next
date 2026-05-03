export const dynamic = "force-dynamic";

import { auth } from '@/lib/auth'
import { toNextJsHandler } from 'better-auth/next-js'

export const { GET, POST } = toNextJsHandler(auth)

// ------------------------------------

// export const dynamic = "force-dynamic";

// import { getAuth } from "@/lib/auth";
// import { toNextJsHandler } from "better-auth/next-js";

// const authInstance = await getAuth();
// const handler = toNextJsHandler(authInstance);

// export const GET = handler.GET;
// export const POST = handler.POST;