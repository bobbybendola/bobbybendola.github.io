interface ContactProps {
  content: {
    title: string;
    description: string;
    email: string;
  };
}

export  function Contact({ content }: ContactProps) {
  return (
        
    <section id="contact" className="border-t border-border py-16 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-bold tracking-tight text-text-primary">
        {content.title}
      </h2>
      <p className="mt-2 text-text-secondary">
        {content.description}
      </p>

      <div className="mt-6">
        <a
          href={`mailto:${content.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>{content.email}</span>
        </a>
      </div>
    </section>
  );
}