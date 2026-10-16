import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import HolaflyCallout from '@/components/HolaflyCallout';
import { HOLAFLY_PLANS_URL } from '@/lib/site';

const CALLOUT_SPLIT = /\{\{holafly:([a-z0-9-]+)\}\}/;

export function withAffiliateLinks(components: Components = {}): Components {
  return {
    ...components,
    a: ({ href, children, ...props }) => {
      const sponsored = Boolean(
        href && (href === HOLAFLY_PLANS_URL || href.includes('esim.holafly.com') || href.includes('holafly.com'))
      );
      if (sponsored) {
        return (
          <a href={href} target="_blank" rel="sponsored noopener" {...props}>
            {children}
          </a>
        );
      }
      if (href?.startsWith('http')) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
          </a>
        );
      }
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    },
  };
}

export default function MarkdownBlocks({
  markdown,
  className,
  components,
}: {
  markdown: string;
  className?: string;
  components?: Components;
}) {
  const parts = markdown.split(CALLOUT_SPLIT);
  const merged = withAffiliateLinks(components);

  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          return <HolaflyCallout key={index} variant={part} />;
        }
        if (!part.trim()) return null;
        return (
          <div key={index} className={className}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={merged}>
              {part}
            </ReactMarkdown>
          </div>
        );
      })}
    </>
  );
}
