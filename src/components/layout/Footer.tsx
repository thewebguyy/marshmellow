export function Footer() {
    return (
        <footer className="py-20 px-6 border-t border-brand-charcoal/5 bg-brand-ivory">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0">
                <div className="space-y-4">
                    <span className="text-2xl font-display font-medium text-brand-charcoal">Marshmellow</span>
                    <p className="text-sm font-sans font-light text-brand-gray max-w-sm">
                        Elevated connections for the medical community. Private. Verified. Architectural.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
                    <div className="flex flex-col space-y-3 uppercase tracking-widest text-[10px] font-bold text-brand-charcoal/40">
                        <span className="text-brand-charcoal/60 mb-2">Network</span>
                        <a href="#" className="hover:text-brand-rose transition-colors">Apply</a>
                        <a href="#" className="hover:text-brand-rose transition-colors">Specialties</a>
                        <a href="#" className="hover:text-brand-rose transition-colors">Cities</a>
                    </div>
                    <div className="flex flex-col space-y-3 uppercase tracking-widest text-[10px] font-bold text-brand-charcoal/40">
                        <span className="text-brand-charcoal/60 mb-2">Truth</span>
                        <a href="#" className="hover:text-brand-rose transition-colors">Verification</a>
                        <a href="#" className="hover:text-brand-rose transition-colors">Privacy</a>
                        <a href="#" className="hover:text-brand-rose transition-colors">Terms</a>
                    </div>
                    <div className="flex flex-col space-y-3 uppercase tracking-widest text-[10px] font-bold text-brand-charcoal/40">
                        <span className="text-brand-charcoal/60 mb-2">Contact</span>
                        <a href="#" className="hover:text-brand-rose transition-colors">Support</a>
                        <a href="#" className="hover:text-brand-rose transition-colors">Press</a>
                        <a href="#" className="hover:text-brand-rose transition-colors">Institutional</a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-charcoal/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-medium text-brand-charcoal/30">
                <p>© 2026 Marshmellow Network Inc. All rights reserved.</p>
                <div className="flex space-x-8 mt-4 md:mt-0">
                    <a href="#" className="hover:text-brand-rose transition-colors">Instagram</a>
                    <a href="#" className="hover:text-brand-rose transition-colors">Thread</a>
                    <a href="#" className="hover:text-brand-rose transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
