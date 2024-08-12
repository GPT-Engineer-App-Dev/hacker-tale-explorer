import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle, ExternalLink } from 'lucide-react';
import Microlink from '@microlink/react';

const StoryCard = ({ story }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="flex-grow pt-6">
        <div className="mb-4 h-40 overflow-hidden rounded-md">
          <Microlink
            url={story.url}
            size="large"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <ArrowUpCircle className="w-4 h-4 mr-1" />
          <span>{story.points} points</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.open(story.url, '_blank')}
        >
          Read More <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;