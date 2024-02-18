function PlaylistIcon(props) {
  return (
    <svg
      class='svg-icon'
      style={{
        width: "2em",
        height: "2em",
        // "vertical-align": "middle",
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

function ShuffleIcon(props) {
  return (
    <svg
      class='svg-icon'
      style={{
        width: "1em",
        height: "1em",
        //  vertical-align: "middle",
        // color:"#003B79",
        fill: "currentColor",
        overflow: "hidden",
      }}
      viewBox='0 0 1024 1024'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M299.296 341.392c11.536 20.736 34.032 58.4 55.728 94.304a8808.64 8808.64 0 0 0 46.752-77.536c-13.408-22.4-25.408-42.768-32.592-55.68C328.464 229.328 269.344 192 193.488 192H16v80h177.488c46.56 0 79.184 21.584 105.808 69.392zM741.248 629.44L847.2 736h-153.024c-46.56 0-79.2-21.04-105.808-68.864-20.048-35.984-72.96-122.544-97.6-162.656 24.64-40.224 77.552-127.104 97.6-163.104C614.976 293.584 647.616 272 694.176 272h154.24l-107.168 107.76 56.72 56.416 202.448-203.568L797.968 29.04l-56.72 56.416L847.2 192h-153.024c-75.872 0-134.976 37.344-175.696 110.448-24.992 44.848-107.2 178.656-108.64 181.024l-0.064-0.032c-3.44 5.6-84.56 137.184-110.48 183.744C272.672 714.992 240.032 736 193.488 736H16v80h177.488c75.872 0 134.976-36.8 175.68-109.92 14.576-26.144 48.528-82.24 74.672-125.088 26.128 42.848 60.08 98.976 74.64 125.104C559.2 779.2 618.304 816 694.16 816h154.24l-107.152 107.76 56.72 56.416 202.448-203.568-202.448-203.568-56.72 56.416z'
        fill='#565D64'
      />
    </svg>
  );
}

export { PlaylistIcon, ShuffleIcon };
