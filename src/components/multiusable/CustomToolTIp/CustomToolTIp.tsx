import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { ToolTipIcon } from '../../../assets/ToolTipIcon';
import styles from './CustomToolTIp.module.scss';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const CustomToolTIp = ({ text }: { text: string }) => {
  const mobile = useMediaQuery('(max-width: 767.98px)');

  return (
    <div className={styles.wrapper}>
      <div className="items-container">
        <div
          key={1}
          className={styles.item}
          data-tooltip-id="my-tooltip"
          data-tooltip-content={text}
          data-tooltip-variant="light"
          data-tooltip-place="top"
        >
          <ToolTipIcon />
        </div>
      </div>
      <Tooltip
        id="my-tooltip"
        closeOnEsc
        openOnClick={Boolean(mobile)}
        className={styles.tooltip}
      />
    </div>
  );
};

export default CustomToolTIp;
