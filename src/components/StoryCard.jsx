import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle, ExternalLink } from 'lucide-react';
import Microlink from '@microlink/react';
import { motion } from 'framer-motion';

const StoryCard = ({ story }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="flex-grow pt-6">
          <div className="mb-4 h-40 overflow-hidden rounded-md">
            <Microlink
              url={story.url}
              size="large"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2 line-clamp-2 hover:line-clamp-none transition-all duration-300">{story.title}</h2>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <ArrowUpCircle className="w-4 h-4 mr-1 text-hn-orange" />
            <span>{story.points} points</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full bg-hn-orange text-white hover:bg-orange-600 transition-colors duration-300"
            onClick={() => window.open(story.url, '_blank')}
          >
            Read More <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default StoryCard;