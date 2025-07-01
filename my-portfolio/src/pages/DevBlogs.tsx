import React from "react";
import { Card } from "@/components/ui/card";

const DevBlogs: React.FC = () => (
  <>
    <Card className="border-none mb-8">
      <h2 className="text-white text-left text-4xl font-bold">Thoughts</h2>
    </Card>

    <div className="max-w-3xl mx-auto px-4">
      <div className="grid grid-cols-2 gap-8">
        {/* 1st blog */}
        <Card className="p-0 w-82 h-82 bg-[#272829] border border-2-black rounded-2xl overflow-hidden flex flex-col">
          <div className="h-3/6 bg-gray-200" />
          <div className="h-1/6 flex items-center px-4 text-gray-300 font-outfit text-[16px]">
            July 1, 2025
          </div>
          <div className="h-2/6 flex items-center px-4 text-white text-xl font-bold font-outfit text-[24px]">
            Why I Like Coding Personal Projects so Much
          </div>
        </Card>

        {/* placeholder blogs */}
        {[1, 2, 3].map((_, i) => (
          <Card
            key={i}
            className="p-0 w-82 h-82 bg-[#272829] border border-2-black rounded-2xl overflow-hidden box-border"
          >
            <div className="h-3/6 bg-gray-200" />
            <div className="h-1/6 bg-gray-300" />
            <div className="h-2/6 bg-gray-400" />
          </Card>
        ))}
      </div>
    </div>
  </>
);

export default DevBlogs;
