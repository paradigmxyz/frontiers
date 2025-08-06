"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Section, SectionHeading } from "~/ui/Section";
import { Text } from "~/ui/Text";
import { WithCursor } from "~/ui/WithCursor";

interface StreamData {
    id: number;
    title: string;
    date: string;
    embedUrl: string;
    thumbnailUrl: string;
}

const STREAMS: StreamData[] = [
    {
        id: 1,
        title: "DAY ONE",
        date: "August 6",
        embedUrl: "https://www.youtube.com/embed/KBAR-hvqjF0?si=14QaU0XuIu0ifgIs",
        thumbnailUrl: "/images/streams/thumb-01.png",
    },
    {
        id: 2,
        title: "DAY TWO",
        date: "August 7",
        embedUrl: "https://www.youtube.com/embed/5VTVxk7qlug?si=kUHAGcYTmTU8WA9O",
        thumbnailUrl: "/images/streams/thumb-02.png",
    },
    {
        id: 3,
        title: "DAY THREE",
        date: "August 8",
        embedUrl: "https://www.youtube.com/embed/LOxkZcASH0s?si=2nHd6mnUh7LKOiWM",
        thumbnailUrl: "/images/streams/thumb-03.png",
    },
];

interface LightboxProps {
    isOpen: boolean;
    currentStreamIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

function Lightbox({ isOpen, currentStreamIndex, onClose, onNext, onPrev }: LightboxProps) {
    const currentStream = STREAMS[currentStreamIndex];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-8 right-8 z-60 text-white hover:text-gray-300 transition-colors"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Previous button */}
            <button
                onClick={onPrev}
                disabled={currentStreamIndex === 0}
                className={clsx(
                    "absolute left-8 top-1/2 -translate-y-1/2 z-60 text-white transition-colors",
                    currentStreamIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:text-gray-300"
                )}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Next button */}
            <button
                onClick={onNext}
                disabled={currentStreamIndex === STREAMS.length - 1}
                className={clsx(
                    "absolute right-8 top-1/2 -translate-y-1/2 z-60 text-white transition-colors",
                    currentStreamIndex === STREAMS.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:text-gray-300"
                )}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Content */}
            <div className="flex flex-col items-center justify-center max-w-6xl w-full mx-8">
                {/* Video */}
                <div className="w-full aspect-video bg-black rounded-lg overflow-hidden mb-6">
                    <iframe
                        src={currentStream.embedUrl}
                        title={currentStream.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                {/* Stream info */}
                <div className="text-center">
                    <Text fontFamily="typewriter" size="24" className="text-white mb-2">
                        {currentStream.title}
                    </Text>
                    <Text fontFamily="typewriter" size="16" className="text-gray-300">
                        {currentStream.date}
                    </Text>
                </div>
            </div>
        </div>
    );
}

export function LivestreamSection() {
    const [isLiveMode, setIsLiveMode] = useState(true);
    const [currentDay, setCurrentDay] = useState(1);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxStreamIndex, setLightboxStreamIndex] = useState(0);

      // Check if we should switch to recordings mode
  useEffect(() => {
    const checkMode = () => {
      const now = new Date();
      
      // For testing purposes - switch to recordings mode on Friday at 8pm PT
      // August 8, 2025 at 8:00 PM PT (which is August 9, 2025 at 4:00 AM UTC)
      const switchTime = new Date('2025-08-09T04:00:00Z');
      
      // TEMPORARY: Force recordings mode to show grid layout
      setIsLiveMode(false);
    };

    checkMode();
    // Check every minute to see if we should switch modes
    const interval = setInterval(checkMode, 60000);
    
    return () => clearInterval(interval);
  }, []);

    // Set current day based on current time during live mode
    useEffect(() => {
        if (isLiveMode) {
            const now = new Date();
            const startTime = new Date('2025-08-06T17:00:00-07:00'); // August 6, 5pm PT

            if (now >= startTime) {
                const daysDiff = Math.floor((now.getTime() - startTime.getTime()) / (1000 * 60 * 60 * 24));
                setCurrentDay(Math.min(Math.max(daysDiff + 1, 1), 3));
            }
        }
    }, [isLiveMode]);

    const openLightbox = (streamIndex: number) => {
        setLightboxStreamIndex(streamIndex);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextStream = () => {
        if (lightboxStreamIndex < STREAMS.length - 1) {
            setLightboxStreamIndex(lightboxStreamIndex + 1);
        }
    };

    const prevStream = () => {
        if (lightboxStreamIndex > 0) {
            setLightboxStreamIndex(lightboxStreamIndex - 1);
        }
    };

    return (
        <>
            <Section className="bg-black text-white py-20 px-4 mb-48">
                <div className="max-w-7xl mx-auto">
                    {isLiveMode ? (
                        // Live streaming mode
                        <div className="text-center">
                            <div className="mb-12">
                                <SectionHeading
                                    fontFamily="default"
                                    className="!text-6xl sm:!text-7xl text-center mb-4 md:mb-4 max-mobile:!text-5xl mx-auto"
                                    weight="400"
                                >
                                    <h1 id="livestream">
                                        Watch the <em className="italic">stream</em>
                                    </h1>
                                </SectionHeading>
                                <Text
                                    size="18"
                                    className="text-gray-300 text-center max-w-2xl mx-auto"
                                >
                                    Stay in touch with the conference no matter where you are.
                                </Text>
                            </div>

                            {/* Tab navigation */}
                            <div className="flex justify-center mb-8">
                                {STREAMS.map((stream, index) => {
                                    const dayNum = index + 1;
                                    const isActive = dayNum === currentDay;
                                    const isFuture = dayNum > currentDay;

                                    return (
                                        <button
                                            key={stream.id}
                                            onClick={() => !isFuture && setCurrentDay(dayNum)}
                                            disabled={isFuture}
                                            className={clsx(
                                                "relative px-8 py-6 font-typewriter transition-all duration-200 text-center min-w-[140px] flex flex-col items-center justify-center",
                                                isActive
                                                    ? "text-white border-b-2 border-b-green-500"
                                                    : isFuture
                                                        ? "text-gray-600 cursor-not-allowed opacity-50"
                                                        : "text-gray-400 hover:text-gray-300"
                                            )}
                                            style={isFuture ? { cursor: 'not-allowed' } : undefined}
                                        >
                                            <div className="text-sm font-medium tracking-wider mb-1">
                                                {stream.title}
                                            </div>
                                            <div className="text-xs tracking-wide opacity-80">
                                                {stream.date}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Current stream */}
                            <div className="max-w-4xl mx-auto">
                                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                                    <iframe
                                        src={STREAMS[currentDay - 1].embedUrl}
                                        title={STREAMS[currentDay - 1].title}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Recordings mode
                        <div className="text-center">
                            <div className="mb-12">
                                <Text
                                    fontFamily="serif"
                                    size="64"
                                    className="text-white mb-4 text-center"
                                    asChild
                                >
                                    <h1 id="recordings">
                                        Catch the <em className="italic">streams</em>
                                    </h1>
                                </Text>
                                <Text
                                    size="18"
                                    className="text-gray-300 text-center max-w-2xl mx-auto"
                                >
                                    Watch a recap of the Frontiers livestreams using the links below.
                                </Text>
                            </div>

                            {/* Grid of recordings */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {STREAMS.map((stream, index) => (
                                    <WithCursor key={stream.id} cursor="pulse-crosshair">
                                        <button
                                            onClick={() => openLightbox(index)}
                                            className="group relative overflow-hidden rounded-lg transition-transform hover:scale-105"
                                        >
                                            <div className="aspect-video relative">
                                                <Image
                                                    src={stream.thumbnailUrl}
                                                    alt={stream.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                                {/* Play overlay */}
                                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black ml-1">
                                                            <path d="M8 5v14l11-7z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-4 text-center">
                                                <Text fontFamily="typewriter" size="16" className="text-white mb-1">
                                                    {stream.title}
                                                </Text>
                                                <Text fontFamily="typewriter" size="14" className="text-gray-400">
                                                    {stream.date}
                                                </Text>
                                            </div>
                                        </button>
                                    </WithCursor>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </Section>

            {/* Lightbox */}
            <Lightbox
                isOpen={lightboxOpen}
                currentStreamIndex={lightboxStreamIndex}
                onClose={closeLightbox}
                onNext={nextStream}
                onPrev={prevStream}
            />
        </>
    );
}    