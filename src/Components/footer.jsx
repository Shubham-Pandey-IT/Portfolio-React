export const Footer = () => {
    return (
        <footer className="py-10 px-4 bg-card relative border-t text-white border-border mt-10 pt-8 flex flex-wrap justify-center items-center">
            <p className="text-sm text-muted-foreground text-center">
                &copy; {new Date().getFullYear()} Developed by <span className="font-semibold text-primary">Shubham Pandey</span>. All rights reserved.
            </p>
        </footer>
    )
}
