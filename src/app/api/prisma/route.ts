// pages/api/save-user.js
import { getAuth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const user = await prisma.user.upsert({
    where: { clerkId: userId },
    update: { lastLogin: new Date() },
    create: { clerkId: userId, lastLogin: new Date() },
  });

  res.status(200).json(user);
}
