import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const dynamic = "force-static";

export const alt = SITE_CONFIG.title;
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "#09090b", // zinc-950
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                {/* Background Grid */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                    }}
                >
                    <div
                        style={{
                            fontSize: 64,
                            fontWeight: 700,
                            color: "white",
                            marginBottom: 24,
                            letterSpacing: "-0.02em",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        Pritesh <span style={{ color: "#52525b", marginLeft: 16 }}>Raj</span>
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            color: "#a1a1aa", // zinc-400
                            textAlign: "center",
                            maxWidth: 800,
                            lineHeight: 1.4,
                        }}
                    >
                        AI Architect & Data Scientist
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: 16,
                            marginTop: 48,
                        }}
                    >
                        <div
                            style={{
                                padding: "8px 24px",
                                background: "#18181b", // zinc-900
                                borderRadius: 99,
                                border: "1px solid #27272a", // zinc-800
                                color: "#d4d4d8", // zinc-300
                                fontSize: 20,
                            }}
                        >
                            LLM Infra
                        </div>
                        <div
                            style={{
                                padding: "8px 24px",
                                background: "#18181b",
                                borderRadius: 99,
                                border: "1px solid #27272a",
                                color: "#d4d4d8",
                                fontSize: 20,
                            }}
                        >
                            Fine-tuning
                        </div>
                        <div
                            style={{
                                padding: "8px 24px",
                                background: "#18181b",
                                borderRadius: 99,
                                border: "1px solid #27272a",
                                color: "#d4d4d8",
                                fontSize: 20,
                            }}
                        >
                            RAG
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
