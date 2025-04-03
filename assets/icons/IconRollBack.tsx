import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Mask,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"
const IconRollBack = (props: SvgProps) => (
  <Svg
    width={49}
    height={48}
    fill="none"
  >
    <G clipPath="url(#a)">
      <Mask
        id="b"
        width={49}
        height={48}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M48.5 0H.5v48h48V0Z" />
      </Mask>
      <G mask="url(#b)">
        <Path
          fill="#835E37"
          d="M47.89 8.56c-.71-4.74-4.28-8.05-8.7-8.05H9.63c-4.67 0-8.16 3.25-8.7 8.1-1.14 10.2.24 25.14 1.23 30.87.88 5.09 3.87 8.01 8.21 8.01h28.1c4.18 0 7.4-3.15 8.21-8.03.31-1.89 3.02-18.83 1.22-30.9h-.01Z"
        />
        <Path
          fill="#C19765"
          d="M45.47 39.27c-.64 3.85-3.14 7.01-7.01 7.01h-28.1c-3.87 0-6.26-2.67-7.01-7.01-1.08-6.24-2.29-20.85-1.22-30.53.49-4.43 3.62-7.01 7.5-7.01h29.55c3.87 0 6.9 2.96 7.5 7.01 1.53 10.33-.25 24.7-1.22 30.53h.01Z"
        />
        <Path
          fill="url(#c)"
          d="M3.34 21.26c1.57-.16 3.15-.31 4.72-.4 2.96-.18 5.93-.32 8.9-.39 5.81-.13 11.66-.11 17.44.62 4.27.54 8.51 1.31 12.76 1.97.23-4.87.17-9.96-.48-14.32-.6-4.04-3.63-7.01-7.5-7.01H9.63c-3.87 0-7 2.57-7.5 7.01-.42 3.76-.49 8.27-.36 12.74.55-.08 1.09-.18 1.56-.22h.01Z"
          opacity={0.5}
          style={{
            mixBlendMode: "screen",
          }}
        />
        <Path
          fill="url(#d)"
          d="M33.32 21.69c-6.18-.7-12.45-.65-18.66-.42-2.96.11-5.94.2-8.88.48-1.33.13-2.66.27-3.98.4.23 6.8.92 13.43 1.55 17.12.75 4.34 3.14 7.01 7.01 7.01h28.1c3.87 0 6.37-3.15 7.01-7.01.54-3.24 1.33-9.12 1.66-15.48-4.6-.72-9.18-1.57-13.8-2.1h-.01Z"
          style={{
            mixBlendMode: "multiply",
          }}
        />
        <G
          opacity={0.7}
          style={{
            mixBlendMode: "screen",
          }}
        >
          <Path
            fill="#F6CC83"
            d="M40.75 6.75c1.18-.94 2.17-2.15 3.38-3.04-.14-.13-.29-.26-.44-.39-1.07 1.34-2.26 2.59-3.43 3.86.17-.14.33-.28.5-.42l-.01-.01ZM19.12 6.93c.25-.01.49-.03.73-.04.02-.78.06-1.56.13-2.34.07-.75.13-1.51.25-2.27.02-.13.08-.34.12-.55h-1.47c-.05.94.14 1.9.13 2.85 0 .71-.1 1.61.12 2.35h-.01ZM22.61 6.72c.72-.03 1.43-.04 2.15 0 .75.04 1.51.11 2.26.17.13-1.73.37-3.48.71-5.16h-5.51c.03 1.66.38 3.32.39 4.99ZM13.94 6.83c.08-.02.18-.03.26-.05.95-.12 1.9-.02 2.86.07.02-1.27-.23-2.58-.19-3.85.01-.43.02-.85.04-1.27h-4.49c.12.41.23.83.34 1.25.35 1.3.71 2.59 1.18 3.85ZM12.03 7.65c-.29-.49-.62-.97-.89-1.47-.37-.7-.73-1.39-1.1-2.08-.41-.77-.83-1.6-1.35-2.31-.24.02-.48.07-.71.11.99 2.13 2.69 3.85 3.67 5.98.13-.08.25-.15.38-.23ZM17.77 6.91l.6.03c-.16-.75-.11-1.57-.1-2.31 0-.97-.18-1.94-.13-2.9h-.51c-.04.83-.05 1.67-.04 2.5.02.9.17 1.79.18 2.68ZM30.16 7.04c.29 0 .59-.01.89-.02.53-1.68.48-3.76 1.36-5.29h-1.66c-.31.92-.35 2.02-.49 2.96l-.33 2.35h.23ZM42.85 10.32c-.97.51-1.94 1.03-2.93 1.49.07.2.14.41.2.61.82-.22 1.65-.43 2.44-.7.96-.33 1.93-.7 2.91-.94.48-.12.96-.21 1.43-.34-.06-.57-.13-1.13-.22-1.69l-.06-.3c-.42.18-.83.41-1.25.61-.85.41-1.7.83-2.53 1.27l.01-.01ZM10.67 8.5c.1-.06.2-.13.31-.19.01 0 .03-.02.05-.03-.97-2.21-2.76-3.98-3.76-6.18-.49.15-.94.35-1.38.59C7.04 4.14 8.18 5.62 9.42 7c.43.48.88.97 1.25 1.5ZM40.95 16.12c.01.06.02.12.04.18 0 .05.01.09.02.13h.05c1.78.1 3.56.18 5.34.2.29 0 .58.01.88.03 0-.38-.01-.76-.03-1.14-1.22.05-2.45.01-3.66.18-.88.12-1.76.25-2.63.42h-.01ZM37.87 8.5l.11.11c1.66-1.94 3.51-3.74 5.11-5.73-.42-.27-.87-.5-1.34-.68-.95 1.27-1.85 2.59-2.59 4.01-.41.78-.82 1.56-1.29 2.29ZM31.83 7.01h.5c.41-1.75.74-3.72 1.58-5.28h-.61c-.58.74-.79 2.02-.97 2.94-.15.79-.28 1.57-.5 2.34ZM35.64 7.38c.21.06.41.12.61.2.52-1 .95-2.03 1.48-3.03.53-.99 1.25-1.86 1.84-2.81H37.93c-.41.85-.73 1.75-1.09 2.61-.43 1.01-.82 2.02-1.22 3.04l.02-.01ZM41.52 33.18v.08c.64.13 1.35.57 1.82.78.9.4 1.81.78 2.73 1.14.05-.42.11-.85.16-1.3-1.54-.51-3.08-.97-4.67-1.34-.02.22-.03.43-.05.65l.01-.01ZM41.43 33.97c-.02.2-.05.39-.09.59.83.02 1.46.56 2.12 1.04.72.53 1.54.88 2.38 1.18.04-.28.08-.58.12-.89-.89-.35-1.77-.72-2.66-1.08-.44-.17-1.25-.72-1.88-.85l.01.01ZM9.26 36.09s.04-.03.07-.04a3.89 3.89 0 0 0-.09-.47c-.3.12-.59.36-.84.51-.61.37-1.24.71-1.87 1.05-1.08.58-2.17 1.13-3.24 1.73.02.14.04.27.07.4.03.19.07.37.11.56.73-.57 1.41-1.19 2.2-1.69 1.18-.72 2.42-1.32 3.59-2.05ZM41.84 27.53c.88-.11 1.85.41 2.67.63.74.2 1.5.4 2.26.63.03-.29.05-.58.08-.88-1.65-.36-3.32-.67-5.01-.68 0 .1 0 .2.01.3h-.01ZM41.7 23.27v.22c1.09 0 2.19 0 3.26.12.72.07 1.44.18 2.15.27.01-.27.03-.53.04-.8-1.82-.06-3.64.09-5.46.19h.01ZM7.47 16.6c0-.16-.01-.33-.02-.5-1.09-.13-2.19-.27-3.3-.35-.8-.07-1.61-.16-2.42-.1 0 .33 0 .67-.01 1.01 1.91-.16 3.84.06 5.75-.06ZM5.37 18c.71-.03 1.43-.11 2.15-.19v-.48c-1.92.12-3.87-.13-5.78.06v.89c1.19.09 2.46-.22 3.64-.27L5.37 18ZM7.4 13.81v-.19c.02-.58.08-1.27.26-1.91-.91-.36-1.83-.7-2.76-1.02-.93-.33-1.94-.59-2.87-.96-.1 1.12-.18 2.3-.23 3.51 1.67.17 3.33.31 4.99.52.13.02.35.03.61.05ZM7.65 26.49c-.02-.2-.05-.41-.07-.6-1.85.39-3.72.74-5.52 1.25.01.27.03.54.05.81.89-.32 1.86-.51 2.72-.73.94-.24 1.88-.51 2.82-.73ZM8.3 31.01l-.03-.23c-1.91.96-3.74 2.09-5.64 3.09.06.53.12 1.03.17 1.53 1.83-1.31 3.71-2.54 5.62-3.73l-.12-.66Z"
            opacity={0.5}
          />
        </G>
        <Path
          fill="#AA8158"
          d="M8.79 41.23c.77-1 1.47-2.07 2.17-3.12-1.64 1.35-3.33 2.62-4.99 3.95-.43.34-.85.68-1.28 1.01.45.75 1 1.39 1.64 1.89.2-.41.39-.82.64-1.22.56-.88 1.2-1.68 1.83-2.5l-.01-.01ZM41.81 44.3c-.63-.47-1.35-.84-1.95-1.35-.35-.31-.67-.64-.99-.98.35.54.71 1.08 1.08 1.61.42.61.84 1.22 1.24 1.84.04.06.08.13.12.2.46-.23.89-.52 1.28-.85-.27-.15-.55-.29-.78-.46v-.01Z"
          opacity={0.7}
          style={{
            mixBlendMode: "multiply",
          }}
        />
        <Path
          fill="#FDF4DF"
          d="M6.12 8.18c.61.95.61 1.96.55 3.07-.16 2.98.04 5.98.12 8.96.02.64.04 1.28.07 1.92h33.18c.19-2.17.45-4.34.76-6.5.21-1.46.14-2.99.66-4.39.18-.48.41-.88.49-1.39.1-.67 0-1.35.41-1.94.46-.64 1.27-1.42 2.12-1.38 1.13.04 1.88 1.23 2.23 2.5-.01-.1-.03-.2-.04-.29-.46-3.1-2.35-5.56-4.95-6.55 1.06.4 1.81 1.78 1.59 2.87-.28 1.35-1.53 1.6-2.73 1.59-2.45-.01-4.87.77-7.32.98-2.59.21-5.2.12-7.8-.07-2.54-.18-5.07-.48-7.61-.72-2.49-.23-5-.07-7.5-.14-1.62-.05-2.92-.61-3.79-2.05-.3-.51-.64-1.49-.24-2.05.07-.1.15-.18.23-.26-2.13.9-3.73 2.81-4.28 5.5.21-.37.45-.72.77-1.03 1.17-1.11 2.44.41 3.06 1.38l.02-.01Z"
          opacity={0.4}
          style={{
            mixBlendMode: "screen",
          }}
        />
        <Path
          fill="#FDF4DF"
          d="M9.7 9.25c-.79-1.38-1.95-2.48-3.06-3.64-.57-.59-1.18-1.19-1.67-1.85-.07-.1-.14-.21-.22-.32-.38.32-.72.69-1.03 1.09.7.46 1.38.95 2.04 1.43 1.39 1 2.84 1.96 3.94 3.29ZM39.61 8.67c.9-.43 1.84-.98 2.63-1.57.78-.58 1.48-1.31 2.28-1.86.2-.14.41-.26.62-.39-.17-.23-.34-.46-.53-.67-.67.69-1.39 1.32-2.09 2-.88.86-2.04 1.58-2.91 2.48v.01Z"
        />
        <Path
          fill="#956537"
          d="M44.55 40.75c-.97.6-2.18-.04-2.7-.92-.41-.69-.18-1.57-.19-2.32-.01-.71.01-1.45-.04-2.18-.21.91-.33 1.84-.52 2.75-.07.35-.6.41-.7.05-.66-2.17-.69-4.4-.74-6.65-.05-2.23.03-4.46.17-6.68.04-.65.09-1.3.14-1.94H6.89c.11 2.5.29 5 .54 7.5.19 1.87.18 3.72.21 5.59.03 1.71.12 4.11-1.75 4.99-1.01.47-1.78-.02-2.39-.92.89 3.89 3.22 6.25 6.86 6.25h28.1c3.58 0 5.98-2.7 6.83-6.15-.22.24-.46.45-.73.63h-.01Z"
          opacity={0.4}
          style={{
            mixBlendMode: "multiply",
          }}
        />
        <Path
          fill="#FDF4DF"
          d="M7.99 43.55c.51-1.09.87-2.16 1.18-3.27-.32.4-.68.77-1.04 1.14-.89.92-1.69 1.91-2.55 2.86.49.52 1.04.95 1.66 1.27.22-.69.44-1.37.74-2.01l.01.01ZM40.55 41.7c-.56-.43-1.13-.8-1.78-1.09-.12-.06-.27-.13-.43-.22.13.17.27.34.4.5.44.53.93 1 1.39 1.51.7.81 1.14 1.78 1.79 2.61l.13.16c.53-.36.99-.8 1.41-1.3-.98-.72-1.96-1.44-2.91-2.18v.01Z"
          opacity={0.5}
        />
        <Path
          fill="#F6CC83"
          d="M41.69 36.51c-.52 3.16-2.57 5.75-5.75 5.75H12.91c-3.17 0-5.13-2.19-5.75-5.75-.88-5.11-1.88-17.09-1-25.03.4-3.64 2.97-5.75 6.15-5.75h24.23c3.18 0 5.65 2.44 6.15 5.75 1.26 8.46-.2 20.25-1 25.03Z"
        />
        <Path
          fill="#AA8158"
          d="M42.69 11.49c-.48-3.25-2.88-5.66-5.98-5.75.65.52 3.39 2.06 3.71 2.85 1.05 2.62.35 10.9-1.3 12.99-3.22 4.07-10.53 2.75-15.58 2.6-4.73-.14-15.32 2.16-14.53-7.38.12-1.41-.89-5.13-1.3-6.49-.33-1.08 1.06-2.51 1.63-3.57.08-.15.17-.29.28-.42-1.85.86-3.18 2.65-3.46 5.18-.88 7.93.12 19.91 1 25.03.61 3.56 2.57 5.75 5.75 5.75h23.04c3.17 0 5.23-2.59 5.75-5.75.8-4.78 2.26-16.56 1-25.03l-.01-.01Z"
          opacity={0.15}
          style={{
            mixBlendMode: "multiply",
          }}
        />
        <Path
          fill="#AA8158"
          d="M42.69 11.49c-.26-1.73-1.05-3.2-2.2-4.24.49.9.92 1.83 1.15 2.81.53 2.28.27 4.54-.31 6.79-1.54 5.83 2.88 11.23-2.6 14.22-4.48 2.45-23.38 3.11-27.84 0-5.06-3.53-2.35-8.61-3.56-14.49-.42-2.03-.84-4.11-.89-6.19v-.27c-.13.43-.22.87-.27 1.36-.88 7.93.12 19.91 1 25.03.61 3.56 2.57 5.75 5.75 5.75h23.04c3.17 0 5.23-2.59 5.75-5.75.8-4.78 2.26-16.56 1-25.03l-.02.01Z"
          opacity={0.15}
          style={{
            mixBlendMode: "multiply",
          }}
        />
        <Path
          fill="#FDF4DF"
          d="M6.16 11.49c.13-1.62.6-3.13 1.75-4.33 1.36-1.41 3.13-1.8 5.01-1.87 4.35-.11 8.7-.17 13.05-.15 3.57.02 7.15-.03 10.72.17 3.39.26 5.6 2.91 5.99 6.18-.77-2.94-2.94-5.33-6.14-5.32-3.36.02-6.88.15-10.3.16-4.19.02-8.38-.01-12.57-.13-1.92-.05-3.75-.04-5.31 1.26-1.25 1.03-1.87 2.48-2.21 4.02l.01.01Z"
        />
        <Path
          fill="#FDF4DF"
          d="M42.69 11.49c1.22 7.63.78 15.46-.22 23.1-.42 3.18-1.19 6.72-4.64 7.93-1.47.51-3.14.33-4.67.33-2.21 0-4.42.01-6.62.02-4.29 0-8.57 0-12.86-.02-1.3 0-2.57-.1-3.74-.75-1.72-.98-2.71-2.84-3.13-4.72-.45-1.98-.61-4.09-.77-6.11-.17-2.11-.32-4.22-.38-6.33-.12-3.88-.12-7.8.31-11.66.07-.59.13-1.19.2-1.78-.35 7.67-.04 15.5 1.2 23.09.31 1.9.55 3.91 1.82 5.45.96 1.15 2.33 1.67 3.8 1.66 3.81-.03 7.62-.02 11.43-.03 2.22 0 4.43.01 6.65.02 1.88 0 3.9.22 5.77-.06 3.03-.45 4.1-3.57 4.54-6.17 1.3-7.81 2.08-15.91 1.34-23.81 0-.05 0-.1-.01-.15l-.02-.01Z"
          opacity={0.5}
        />
        <Path
          fill="#FDF4DF"
          d="M15.61 9.04c-1.07-3.53-5.93.23-6.6 2.13-.23.65-.62 1.95-.16 2.58.99 1.39 3.81-.63 4.67-1.24 1.02-.73 2.52-2.04 2.09-3.47ZM19.27 8.09c-.76-.2-2.17.48-2.12 1.66.08 1.95 1.85.54 2.35-.36.43-.78.21-1.2-.23-1.31v.01Z"
        />
        <Path
          fill="#835E37"
          d="M14.7 15.53c.06-.05.13-.11.2-.16 1.65-1.37 3.67-2.3 5.85-2.65 2.98-.9 6.15-.64 8.93.74 2.33 1.15 4.23 3.05 5.43 5.37.04-.01.1-.03.16-.05.86-.22 1.26-.3 1.56-.23.17.01.33.06.48.13.6.3.85 1 .99 1.5.42 1.54.12 7.22-.08 8.37-.11.65-.28 1.36-.94 1.66-.34.2-.87.41-1.3.57l-.06.02c-.58.25-1.23.15-1.73.04-.97-.23-1.9-.58-2.8-.92l-.42-.16c-1.04-.39-2.4-.91-3.75-1.52l-.13-.06c-.15-.06-.32-.14-.49-.22-.29-.14-.71-.38-1.03-.73-1.12-1.27.01-2.52.49-3.06.15-.16.3-.31.46-.44-.1-.33-.25-.66-.44-.96-.37-.58-.9-1.04-1.52-1.35-.46-.23-.95-.36-1.45-.38-.78-.04-1.58.19-2.26.63-.19.24-.35.5-.49.78-.79 1.59-.26 3.05.71 3.53.15.08.32.13.49.16 1.06.19 1.89.6 2.35 1.16.57.69.11 1.74-.07 2.1-.83 1.94-2.33 5.19-3.32 5.95-.32.33-1.62 1.55-2.72 1.04-.1-.04-.21-.09-.32-.15-.19-.09-.38-.2-.55-.29-.13-.07-.25-.14-.38-.21-4.13-2.15-6.64-6.79-6.23-11.55.27-3.21 1.76-6.24 4.09-8.38.05-.06.13-.12.29-.27v-.01Z"
        />
        <Path
          fill="#835E37"
          d="M15.22 16.13c3.47-3.03 8.6-3.65 12.72-1.62-.13-.06-.25-.13-.38-.18 2.73 1.23 4.78 3.46 5.96 6.19.38-.24 1.08-.82 1.65-.92.19-.03 1.4-.39 1.54-.29.54.28-.37 1.75-.33 2.26.11 1.33.12 2.68.09 4.01-.01.66-.03 1.32-.07 1.97-.03.63.91 1.19.71 1.79-.07.2-1.39.68-1.48.72-.35.15-.81.09-1.24-.01-1.07-.25-2.11-.67-3.13-1.05-1.25-.47-2.49-.96-3.71-1.5-.46-.21-1.04-.44-1.38-.83-.65-.73-.04-1.43.49-2.01.23-.25.5-.46.76-.66-.11-.6-.34-1.17-.67-1.68-.79-1.22-2.13-2.02-3.59-2.09-1.64-.07-3.31.8-4.11 2.24-.78 1.41-.79 3.61 1.11 4.07.87.21 1.77.46 2.35 1.21.52.69-.05 1.71-.36 2.39-.57 1.26-1.17 2.51-1.87 3.7-.16.27.2.28-.1.68-.39.52-1.5 1.39-2.05 1.11-.41-.17-.81-.42-1.21-.63-3.94-2.04-6.18-6.41-5.81-10.79.26-3.1 1.76-6.09 4.12-8.12-.69.59.69-.6 0 0l-.01.04Z"
        />
        <Path
          fill="#F6CC83"
          d="M29.33 14.15c2.57 1.27 4.54 3.47 5.56 6.08.33-.2.58-.36.71-.43.84-.46 1.51-1.04 1.94.57.36 1.32.12 6.83-.09 8.04-.21 1.21-.48 1.25-1.52 1.04-1.03-.21-6.26-2.36-7.49-3.06-1.22-.69-.6-1.08 0-1.75.12-.14.47-.41.94-.75a5.181 5.181 0 0 0-2.83-4.13 5.14 5.14 0 0 0-6.89 2.33c-1.1 2.22-.12 4.47 1.77 4.81.96.17 1.58.52 1.88.89.3.37-.18 1.27-.18 1.27s-2.61 6.09-3.33 5.73c-.72-.36-1.3-.64-1.44-.71-5.32-2.92-7.03-9.27-4.31-14.76 2.79-5.63 9.65-7.95 15.28-5.16v-.01Z"
        />
        <Path
          fill="#AA8158"
          d="M14.49 18.51c-1.08 1.83-1.55 4.44-.96 6.53.64 2.27 2.99 5.06 5.03 5.98 1.33.61 2.27 1.15 3.16-.66.32-.64 1.51-2.4.72-2.75-.81-.35-1.48-.56-1.94-.74-.7-.28-1.5-.85-2.02-1.39-1.91-1.99.03-5.44.68-6.21 2.2-2.63 5.48-3.32 8.9-1.01 1.22.82 1.97 1.91 2.89 3.04.34.43.74 1.07 1.08 1.41.02.02.07.02.09.02-1.04.68-3.78 2.36-2.48 3.19.73.47 2.64.93 3.41 1.34.79.42 2.36 1.05 3.25 1.2 1.56.26 1.26-2.53 1.31-3.67.04-.93.05-1.87-.03-2.8-.05-.6-.03-1.19-.2-1.77-.15-.51-.7-1.05-1.3-.68.84-.52 1.25.02 1.47.83.36 1.32.12 6.83-.09 8.04-.21 1.21-.48 1.25-1.52 1.04-1.03-.21-6.26-2.36-7.49-3.06-1.22-.69-.6-1.08 0-1.75.12-.14.47-.41.94-.75a5.181 5.181 0 0 0-2.83-4.13 5.14 5.14 0 0 0-6.89 2.33c-1.1 2.22-.12 4.47 1.77 4.81.96.17 1.58.52 1.88.89.3.37-.18 1.27-.18 1.27s-2.61 6.09-3.33 5.73c-.72-.36-1.3-.64-1.44-.71-5.32-2.92-7.03-9.27-4.31-14.76.13-.28.28-.54.44-.8l-.01-.01Z"
          opacity={0.5}
          style={{
            mixBlendMode: "multiply",
          }}
        />
        <Path
          fill="#FDF4DF"
          d="M18.13 14.75c1.51-1.06 3.48-1.45 5.28-1.59 2.07-.16 4.12.26 5.91 1.34 1.91 1.15 3.54 3.07 4.59 5.02.02.02-.02.04-.03.02-1.18-1.57-2.44-3.09-4.21-4.03-1.77-.94-3.58-1.48-5.59-1.46-1.88.02-3.72.52-5.41 1.33-2.2 1.05-3.51 2.95-4.34 5.11-.25.64-.62 2.51-.53.84.13-2.52 2.31-5.14 4.35-6.57l-.02-.01ZM35.45 21.05c-.01 1.08.31 2.71.48 3.7.07.39.09.92.29 1.21.38.55.71-.13.75-.69.05-.85-.11-1.66-.13-2.48-.02-.77.04-2.42-.54-2.72-.13-.07-.25-.07-.35-.02-.41.21-.49.51-.5 1ZM36.65 28.03s-.09-.01-.15-.03c-.52-.17-.6-1.41 0-1.47.71-.07.89 1.57.14 1.5h.01ZM17.45 22.27c-.23 1.64.01 2.4.64 3.29.79 1.12 2.04 1.32 3.15 1.89.9.47 1.02 1.32-.06 1.15-.85-.13-1.63-.56-2.32-1.09-1.67-1.3-2.14-2.42-1.74-4.36.02-.12.34-1.01.32-.89l.01.01Z"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={24.5}
        x2={24.5}
        y1={20.18}
        y2={1.96}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={1} stopColor="#F6CC83" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={24.46}
        x2={24.46}
        y1={23.45}
        y2={57.05}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#835E37" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h48v48H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default IconRollBack
