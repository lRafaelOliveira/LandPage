export const Section = ({ id, title, children }: { id: string, title?: string, children?: React.ReactNode }) => (
    <div id={id} className="min-h-screen w-full flex flex-col border border-spacing-0">
        {children}
    </div>
);