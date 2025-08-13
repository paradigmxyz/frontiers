"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
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
        title: "DAY 1",
        date: "AUGUST 6",
        embedUrl: "https://www.youtube.com/embed/KBAR-hvqjF0?si=14QaU0XuIu0ifgIs",
        thumbnailUrl: "/images/streams/thumb-01.png",
    },
    {
        id: 2,
        title: "DAY 2",
        date: "AUGUST 7",
        embedUrl: "https://www.youtube.com/embed/_tZGVKoIr0M?si=UFqppxXfRghSbx7p",
        thumbnailUrl: "/images/streams/thumb-02.png",
    },
    {
        id: 3,
        title: "DAY 3",
        date: "AUGUST 8",
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
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={onClose}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-8 right-8 z-60 text-white hover:text-gray-300 transition-colors animate-in fade-in slide-in-from-top-4 duration-300 delay-150"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Content */}
            <div
                className="flex flex-col items-center justify-center w-full mx-8 animate-in zoom-in-95 fade-in duration-300 delay-100"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Video container with max-width */}
                <div className="w-full max-w-[50vw] max-mobile:max-w-[90vw]">
                    <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
                        <iframe
                            src={currentStream.embedUrl}
                            title={currentStream.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* Navigation with current stream info */}
                <div className="flex justify-between items-center w-full max-w-[50vw] max-mobile:max-w-[90vw]">
                    {/* Previous button */}
                    <button
                        onClick={onPrev}
                        disabled={currentStreamIndex === 0}
                        className={clsx(
                            "flex items-center space-x-2 text-white transition-colors",
                            currentStreamIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:text-gray-300"
                        )}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="text-left">
                            <div className="text-sm font-typewriter">PREV</div>
                        </div>
                    </button>

                    {/* Current stream info */}
                    <div className="text-center">
                        <div className="text-sm font-typewriter text-white">{currentStream.title}</div>
                        <div className="text-sm font-typewriter text-white opacity-50">{currentStream.date}</div>
                    </div>

                    {/* Next button */}
                    <button
                        onClick={onNext}
                        disabled={currentStreamIndex === STREAMS.length - 1}
                        className={clsx(
                            "flex items-center space-x-2 text-white transition-colors",
                            currentStreamIndex === STREAMS.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:text-gray-300"
                        )}
                    >
                        <div className="text-right">
                            <div className="text-sm font-typewriter">NEXT</div>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
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

            if (now >= switchTime) {
                setIsLiveMode(false);
            }
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
            const day1Start = new Date('2025-08-06T17:00:00-07:00'); // August 6, 5pm PT
            const day2Start = new Date('2025-08-07T07:00:00-07:00'); // August 7, 7am PT
            const day3Start = new Date('2025-08-08T07:00:00-07:00'); // August 8, 7am PT

            if (now >= day3Start) {
                setCurrentDay(3);
            } else if (now >= day2Start) {
                setCurrentDay(2);
            } else if (now >= day1Start) {
                setCurrentDay(1);
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
            <Section className="bg-black text-white py-10 md:py-20 px-4 mb-24 md:mb-48">
                <div className="max-w-7xl mx-auto">
                    {isLiveMode ? (
                        // Live streaming mode
                        <div className="text-center">
                            <div className="mb-12">
                                <SectionHeading
                                    fontFamily="default"
                                    className="!text-6xl sm:!text-7xl text-center mb-4 md:mb-4 max-mobile:!text-5xl mx-auto"
                                    weight="400"
                                    id="livestream"
                                >
                                    Watch the <em className="italic">stream</em>
                                </SectionHeading>
                                <Text
                                    size="18"
                                    className="text-gray-300 text-center max-w-2xl pt-2 mx-auto max-mobile:pt-6"
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
                                            <div className="text-xs tracking-wide opacity-50">
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
                                <SectionHeading
                                    fontFamily="default"
                                    className="!text-6xl sm:!text-7xl text-center mb-4 md:mb-4 max-mobile:!text-5xl mx-auto"
                                    weight="400"
                                    id="livestream"
                                >
                                    Catch the <em className="italic">streams</em>
                                </SectionHeading>
                                <Text
                                    size="18"
                                    className="text-gray-300 text-center max-w-2xl mx-auto max-mobile:pt-4"
                                >
                                    Watch a recap of the Frontiers livestreams using the links below.
                                </Text>
                            </div>

                            {/* Grid of recordings */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto md:mx-12 px-6 md:px-0">
                                {STREAMS.map((stream, index) => (
                                    <WithCursor key={stream.id} cursor="pulse-crosshair">
                                        <button
                                            onClick={() => openLightbox(index)}
                                            className="group relative rounded-lg transition-transform hover:scale-105"
                                        >
                                            <div className="aspect-video relative">
                                                <Image
                                                    src={stream.thumbnailUrl}
                                                    alt={stream.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            <div className="mt-4 text-center">
                                                <Text fontFamily="typewriter" size="16" className="text-white mb-1">
                                                    {stream.title}
                                                </Text>
                                                <Text fontFamily="typewriter" size="12" className="text-gray-400 mt-1 opacity-50 uppercase">
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