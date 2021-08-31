type Props = {
  checkList: readonly boolean[];
  labels: readonly string[];
  onCheck: (index: number) => void;
};

export default function Checks({ checkList, labels, onCheck }: Props) {
  return (
    <ul>
      {labels.map((label, i) => (
        <li key={i}>
          <label>
            <input
              type='checkbox'
              defaultChecked={checkList[i]}
              onClick={() => onCheck(i)}
            />
            {label}
          </label>
        </li>
      ))}
    </ul>
  );
}
