// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from 'next/server.js'
import prisma from '@/prisma/client'

export async function GET(request: Request) {
  try {
    const data = await prisma.product.findMany({})
    return NextResponse.json({ data }, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ msg: 'Something went wrong' }, { status: 500 })
  }
}
