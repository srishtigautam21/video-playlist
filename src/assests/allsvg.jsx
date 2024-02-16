function PlaylistIcon(props) {
  return (
    <svg
      class='svg-icon'
      style={{
        width: "2em",
        height: "2em",
        "vertical-align": "middle",
        fill: "currentColor",
        overflow: "hidden",
      }}
      viewBox='0 0 1024 1024'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M128 432c0-35.2 25.104-49.888 55.776-32.624l144.432 81.248c30.672 17.264 30.672 45.504 0 62.752l-144.432 81.248C153.104 641.888 128 627.2 128 592V432zM896 688a32 32 0 0 1-32 32H480a32 32 0 1 1 0-64h384a32 32 0 0 1 32 32zM896 160a32 32 0 0 1-32 32H160a32 32 0 1 1 0-64h704a32 32 0 0 1 32 32zM896 864a32 32 0 0 1-32 32H160a32 32 0 1 1 0-64h704a32 32 0 0 1 32 32zM896 336a32 32 0 0 1-32 32H480a32 32 0 1 1 0-64h384a32 32 0 0 1 32 32zM896 512a32 32 0 0 1-32 32H480a32 32 0 1 1 0-64h384a32 32 0 0 1 32 32z' />
    </svg>
  );
}

export { PlaylistIcon };
