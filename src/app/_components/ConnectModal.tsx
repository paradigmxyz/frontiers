"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Text } from "~/ui/Text";
import { WithCursor } from "~/ui/WithCursor";
import { Button } from "~/ui/Button";

interface ConnectModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
    const [copiedSSID, setCopiedSSID] = useState(false);
    const [copiedPassword, setCopiedPassword] = useState(false);

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

    const handleCopy = async (text: string, type: 'ssid' | 'password') => {
        try {
            await navigator.clipboard.writeText(text);
            if (type === 'ssid') {
                setCopiedSSID(true);
                setTimeout(() => setCopiedSSID(false), 2000);
            } else {
                setCopiedPassword(true);
                setTimeout(() => setCopiedPassword(false), 2000);
            }
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-8 right-8 z-60 text-white hover:text-gray-300 transition-colors"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Content */}
            <div
                className="flex flex-col items-center justify-center w-full mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="bg-gray-900 rounded-lg p-8 w-full max-w-4xl">
                    {/* Content Grid - Side by side on desktop */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Telegram Section */}
                        <div className="bg-gray-800 rounded-lg p-6 border border-white/10">
                            <Text fontFamily="typewriter" size="18" className="text-white mb-6 text-center opacity-50">
                                JOIN TELEGRAM
                            </Text>

                            {/* QR Code with translucent background */}
                            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg mb-6 flex items-center justify-center">
                                <img
                                    src="/images/qr.svg"
                                    alt="QR Code for Telegram"
                                    className="w-48 h-48 rounded"
                                />
                            </div>

                            <WithCursor cursor="pulse-crosshair">
                                <Button
                                    asChild
                                    frame
                                    color="white"
                                    className="w-full"
                                    height="50"
                                >
                                    <a
                                        href="https://t.me/frontiers2025"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        OPEN TELEGRAM
                                    </a>
                                </Button>
                            </WithCursor>
                        </div>

                        {/* WiFi Section */}
                        <div className="bg-gray-800 rounded-lg p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
                            <Text fontFamily="typewriter" size="18" className="text-white mb-6 text-center opacity-50">
                                WIFI ACCESS
                            </Text>

                            <div className="space-y-4">
                                <div className="bg-gray-700 p-4 rounded-lg">
                                    <Text fontFamily="typewriter" size="14" className="text-gray-400 mb-2 opacity-60">
                                        NETWORK NAME (SSID)
                                    </Text>
                                    <div className="flex items-center justify-between">
                                        <Text fontFamily="typewriter" size="16" className="text-white">
                                            Frontiers2025
                                        </Text>
                                        <button
                                            onClick={() => handleCopy('Frontiers2025', 'ssid')}
                                            className="text-gray-400 hover:text-green-400 transition-all duration-200 p-1"
                                        >
                                            {copiedSSID ? (
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-400">
                                                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            ) : (
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="hover:text-green-400 transition-colors">
                                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Faint divider */}
                                <hr className="border-white/10 border-t my-4" />

                                <div className="bg-gray-700 p-4 rounded-lg">
                                    <Text fontFamily="typewriter" size="14" className="text-gray-400 mb-2 opacity-60">
                                        PASSWORD
                                    </Text>
                                    <div className="flex items-center justify-between">
                                        <Text fontFamily="typewriter" size="16" className="text-white">
                                            opensource
                                        </Text>
                                        <button
                                            onClick={() => handleCopy('opensource', 'password')}
                                            className="text-gray-400 hover:text-green-400 transition-all duration-200 p-1"
                                        >
                                            {copiedPassword ? (
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-400">
                                                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            ) : (
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="hover:text-green-400 transition-colors">
                                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                                                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}