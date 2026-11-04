
"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Download, Image as ImageIcon, X } from "lucide-react";

type VerseImageButtonProps = {
  verseText: string;
  reference: string;
  isUrdu: boolean;
};

export default function VerseImageButton({
  verseText,
  reference,
  isUrdu,
}: VerseImageButtonProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");

  async function downloadImage() {
    if (!imageRef.current) return;

    setGenerating(true);
    setError("");

    try {
      const dataUrl = await toPng(imageRef.current, {
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: "#0f172a",
      });

      const link = document.createElement("a");
      link.download = `bible-aur-hum-${reference.replace(/[^a-z0-9]+/gi, "-")}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      setError(
        isUrdu
          ? "تصویر تیار نہیں ہو سکی۔ دوبارہ کوشش کریں۔"
          : "Could not generate the image. Please try again."
      );
    } finally {
      setGenerating(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setError("");
          setShowPreview(true);
        }}
        title={isUrdu ? "آیت کی تصویر بنائیں" : "Create verse image"}
        aria-label={isUrdu ? "آیت کی تصویر بنائیں" : "Create verse image"}
        className="rounded-lg border border-slate-200 p-2 text-amber-600 transition hover:border-amber-300 hover:bg-amber-50"
      >
        <ImageIcon size={18} />
      </button>

      {showPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowPreview(false);
            }
          }}
        >
          <div className="my-auto w-full max-w-lg rounded-2xl bg-white p-4 shadow-2xl sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">
                {isUrdu ? "آیت کی تصویر" : "Bible Verse Image"}
              </h2>

              <button
                type="button"
                onClick={() => setShowPreview(false)}
                aria-label="Close preview"
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Image Preview */}
            <div
              ref={imageRef}
              dir={isUrdu ? "rtl" : "ltr"}
              lang={isUrdu ? "ur" : "en"}
              className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-amber-500 bg-slate-900 px-7 py-12 text-center text-white sm:px-10"
            >
              <div className="absolute inset-3 rounded-lg border border-amber-500/30" />

              <p className="relative mb-8 text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
                BIBLE AUR HUM MINISTRIES
              </p>

              <div className="relative mb-8 h-px w-20 bg-amber-500" />

              <p
                className={`relative w-full whitespace-pre-wrap text-xl font-semibold leading-10 sm:text-2xl ${
                  isUrdu ? "text-right" : "text-center"
                }`}
              >
                {verseText}
              </p>

              <div className="relative my-8 h-px w-20 bg-amber-500" />

              <p className="relative text-base font-bold text-amber-400">
                {reference}
              </p>

              <p className="relative mt-8 text-xs tracking-widest text-slate-400">
                THE WORD OF GOD
              </p>
            </div>

            {error && (
              <p className="mt-3 text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={downloadImage}
              disabled={generating}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Download size={19} />
              {generating
                ? isUrdu
                  ? "تصویر تیار ہو رہی ہے..."
                  : "Generating Image..."
                : isUrdu
                  ? "تصویر ڈاؤن لوڈ کریں"
                  : "Download Image"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
