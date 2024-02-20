import Records from '@/app/model/records';
import { NextResponse } from 'next/server';
import connectDB from '../../lib/mongodb';

export async function GET() {
  // 운동 기록 가져오기
  await connectDB();
  const data = await Records.find({});
  return NextResponse.json(data);
}

export async function POST(req) {
  // 운동 기록 생성
  const { name, count, type, date, id } = await req.json();
  await connectDB();
  await Records.create([{ name, count, type, date, id }]);

  return NextResponse.json({
    msg: ['message created'],
    success: true,
  });
}

export async function PATCH(req) {
  // 운동 기록 수정
  const { name, count, type, id } = await req.json();
  await connectDB();
  await Records.findOneAndUpdate(
    { id },
    {
      name,
      count,
      type,
      id,
    },
    { new: true },
  );

  return NextResponse.json({
    msg: ['data has been updated'],
    success: true,
  });
}

export async function DELETE(req) {
  // 운동 기록 삭제
  const id = new URL(req.url).searchParams.get('id');

  await connectDB();
  await Records.findOneAndDelete({ id });
  const data = await Records.find({});

  return NextResponse.json({
    msg: ['data has been deleted'],
    body: data,
    success: true,
  });
}
