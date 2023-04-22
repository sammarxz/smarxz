import { memo, createElement } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

import { AnimatedLines } from '@/components';
import { useWindowDimensions } from '@/hooks/useWindowDimension';

import { info } from '@/data/info';

const HeaderInfo = memo(() => {
  const { width } = useWindowDimensions()
  const { scrollYProgress } = useScroll();
  const multiplier = useTransform(scrollYProgress, (v) => v * (width! / 20));
  const inversor = useTransform(multiplier, [0, 1], [1, 0]);

  return (
    <>
      {info.map(({ text }, index) => (
        <motion.div
          key={index}
          className={`grid-col-${index + 2}`}
          initial={{ opacity: 1 }}
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