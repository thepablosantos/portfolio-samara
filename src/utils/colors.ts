export const replaceColors = (className: string): string => {
    return className
      .replace(/teal-(\d+)/g, (match, num) => {
        const colorMap: Record<string, string> = {
          '50': 'primary-sand/10',
          '100': 'primary-sand/20',
          '200': 'primary-sand/40',
          '300': 'primary-sand/60',
          '400': 'primary-sand',
          '500': 'primary-coral',
          '600': 'primary-coral',
          '700': 'primary-warmBrown',
          '800': 'primary-warmBrown',
          '900': 'primary-warmBrown',
        };
        return colorMap[num] || match;
      })
      .replace(/cyan-(\d+)/g, (match, num) => {
        const colorMap: Record<string, string> = {
          '50': 'primary-sand/10',
          '100': 'primary-sand/20',
          '200': 'primary-sand/40',
          '300': 'primary-sand',
          '400': 'primary-sand',
          '500': 'primary-sand',
          '600': 'primary-warmBrown',
          '700': 'primary-warmBrown',
          '800': 'primary-warmBrown',
          '900': 'primary-warmBrown',
        };
        return colorMap[num] || match;
      })
      .replace(/gray-50/g, 'neutral-lightCream')
      .replace(/gray-100/g, 'neutral-softGray/30')
      .replace(/gray-200/g, 'neutral-sage/40')
      .replace(/gray-300/g, 'neutral-sage')
      .replace(/gray-400/g, 'neutral-sage')
      .replace(/gray-500/g, 'neutral-sage')
      .replace(/gray-600/g, 'neutral-darkGreen/70')
      .replace(/gray-700/g, 'neutral-darkGreen/80')
      .replace(/gray-800/g, 'neutral-darkGreen')
      .replace(/gray-900/g, 'neutral-darkGreen')
      .replace(/black/g, 'neutral-deepBlack')
      .replace(/white/g, 'neutral-lightCream');
  };
  