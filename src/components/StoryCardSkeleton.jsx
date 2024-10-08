import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const StoryCardSkeleton = () => {
  return (
    <Card className="h-full flex flex-col overflow-hidden shadow-lg">
      <CardContent className="flex-grow pt-6">
        <Skeleton className="h-40 w-full mb-4 rounded-md" />
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-6 w-1/2 mb-2" />
        <Skeleton className="h-4 w-1/4 mb-4" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  );
};

export default StoryCardSkeleton;