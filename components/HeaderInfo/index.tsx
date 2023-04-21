import { memo, createElement } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

import { AnimatedLines } from '@/components';

import { info } from '@/data/info';

const HeaderInfo = memo(() => {
  const { scrollYProgress } = useScroll();
  const multiplier = useTransform(scrollYProgress, (v) => v * 100);
  const inversor = useTransform(multiplier, [0, 1], [1, 0]);

  return (
    <>
      {info.map(({ text }, index) => (
        <motion.div
          key={index}
          className={`grid-col-${index + 2}`}
          style={{
            opacity: inversor,
          }}
        >
          {text.map((item, subIndex) => {
            const Tag = () => {
              const { tag, content, props } = item;
              return createElement(
                tag,
                {
                  key: subIndex,
                  ...props,
                  style: {
                    opacity: inversor,
                  },
                },
                <AnimatedLines text={content} delay={subIndex} />
              );
            };
            return <Tag key={subIndex} />;
          })}
        </motion.div>
      ))}
    </>
  );
});

HeaderInfo.displayName = 'HeaderInfo';

export { HeaderInfo };