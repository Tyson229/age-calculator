interface AgeItemTypeProps {
  number: number;
  measurement: string;
}

const AgeItem = ({ number, measurement }: AgeItemTypeProps) => {
  return (
    <div>
      <span className="age__result">{number || "--"}</span>
      {measurement}
    </div>
  );
};

export default AgeItem;
