import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

import { Spinner } from "@/components/ui/spinner";

export function SpinnerEmpty() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <Empty className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6">

        <EmptyHeader className="flex flex-col items-center text-center gap-4">

          {/* Spinner with glow */}
          <EmptyMedia variant="icon">
            <div className="p-4 rounded-full bg-blue-500/10 animate-pulse">
              <Spinner className="w-6 h-6 text-blue-400" />
            </div>
          </EmptyMedia>

          {/* Title */}
          <EmptyTitle className="text-xl font-semibold tracking-wide">
            Processing your request
          </EmptyTitle>

          {/* Description */}
          <EmptyDescription className="text-sm text-gray-400 leading-relaxed">
            We’re working on it. This usually takes just a moment.
            Try not to destroy the refresh button meanwhile.
          </EmptyDescription>

        </EmptyHeader>

        {/* Optional action */}
        <EmptyContent className="mt-6 flex justify-center">
          <Button
            variant="outline"
            className="border-white/20 bg-white/5 hover:bg-white/10"
            disabled
          >
            Please wait...
          </Button>
        </EmptyContent>

      </Empty>
    </div>
  );
}