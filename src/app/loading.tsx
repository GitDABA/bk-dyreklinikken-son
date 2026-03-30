export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center pt-20">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-8 h-8 border-3 border-[var(--color-sand)] border-t-[var(--color-primary)] rounded-full animate-spin"
          role="status"
          aria-label="Laster inn"
        />
        <p className="text-sm text-[var(--color-text-muted)] font-sans">
          Laster inn...
        </p>
      </div>
    </div>
  );
}
