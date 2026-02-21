export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-steel)] text-[var(--color-brand-white)] mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-brand-red)]">
            Cineon
          </h2>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Discover, rent, and stream the world’s best movies in one place.
            Your cinematic experience starts here.
          </p>
        </div>
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} CineVault. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-[var(--color-brand-frost)] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-[var(--color-brand-frost)] cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
