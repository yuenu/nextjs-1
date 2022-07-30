import classes from './logistics-item.module.css';

type PropType = {
  icon: React.ComponentType
  children: React.ReactNode
}

function LogisticsItem({ icon: Icon, children }: PropType) {
  // const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
