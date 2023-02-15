import type { VsfIconProps } from './types';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

export default function VsfIconChevronRight({
  className = '',
  size = VsfIconSize.base,
  ariaLabel,
  viewBox,
  ...attributes
}: VsfIconProps) {
  return (
    <VsfIconBase
      {...attributes}
      className={className}
      size={size}
      ariaLabel={ariaLabel}
      data-testid="chevron-right"
      viewBox={viewBox ?? '0 0 24 24'}
    >
      <path d="M8.705 17.297a.998.998 0 0 1-.001-1.41l3.876-3.885-3.876-3.885a.998.998 0 0 1 1.412-1.41l4.587 4.588a1 1 0 0 1 0 1.414l-4.587 4.588a.997.997 0 0 1-1.411 0Z" />
    </VsfIconBase>
  );
}
