import { useState } from 'react';

const labels = ['check 1', 'check 2', 'check 3'];

export default function CheckBox() {
  const [checkList, setCheckList] = useState([false, false, false]);

  // index番目のチェック状態を反転させる
  const handleCheckClick = (index: number) => {
    setCheckList((checks) => checks.map((c, i) => (i === index ? !c : c)));
  };

  const isAllChecked = checkList.every((x) => x);

  return (
    <div>
      <ul>
        {labels.map((label, idx) => (
          <li key={idx}>
            <label>
              <input
                type='checkbox'
                checked={checkList[idx]}
                onClick={() => handleCheckClick(idx)}
              />
              {label}
            </label>
          </li>
        ))}
      </ul>
      <p>
        <button disabled={!isAllChecked}>次へ</button>
      </p>
    </div>
  );
}
