import { useChecks } from './hooks';

const labels = ['check 1', 'check 2', 'check 3'];

export default function CheckBox() {
  const [isAllChecked, renderChecks] = useChecks(labels);

  return (
    <div>
      {renderChecks()}
      <p>
        <button disabled={!isAllChecked}>次へ</button>
      </p>
    </div>
  );
}
