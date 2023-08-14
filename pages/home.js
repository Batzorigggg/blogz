import Link from "next/link";
import Image from "next/image";
import React from 'react';
import '/app/globals.css';
function Homepage() {
  return (
    <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
      <Link href="/home">
          <div>
            <Image src="/blog.png" alt="Blog" width={100} height={100} />
          </div>
      </Link>
      <div className="grow">
        <div className="flex items-center justify-center gap-2 md:gap-8">
              <select>
                <option value="sport">sport</option>
              </select>
        </div>
      </div>
    </div>
  );
}

export default Homepage;