import Image from 'next/image';

import profile from '@/public/images/profile.webp';
import Card from '../ui/card';

export default function Description() {
  return (
    <Card className="flex flex-col justify-center gap-4 p-8">
      <div className="relative size-14 overflow-hidden rounded-full sm:size-16">
        <Image
          src={profile}
          alt="A close-up portrait of a smiling young man with dark hair wearing a black hoodie, photographed outdoors with a river or body of water visible in the background."
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          priority
        />
      </div>
      <p className="text-balance leading-relaxed">
        {`
                I'm Enrique, a software engineer proudly representing LATAM tech talent from Asunción, Paraguay. I specialize in full-stack development with React, Node, and Next.js, while exploring AI integration.
                `}
      </p>
    </Card>
  );
}
