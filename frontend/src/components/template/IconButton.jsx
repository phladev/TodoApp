import If from "./If";

export default function IconButton({ hide, btnStyle, onClick, icon }) {
  return (
    <If test={!hide}>
      <button className={`btn btn-${btnStyle}`} onClick={onClick}>
        <i className={`fa fa-${icon}`}></i>
      </button>
    </If>
  );
}
