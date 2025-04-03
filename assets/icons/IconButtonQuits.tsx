import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IconButtonQuits = (props: SvgProps) => (
  <Svg
    width={236}
    height={48}
    fill="none"
  >
    <G clipPath="url(#a)">
      <Path
        fill="#6F4B28"
        d="M234.743 8.227C233.936 3.378 229.82 0 224.747 0H11.294C5.932 0 1.916 3.329 1.288 8.267c-1.305 10.432.28 25.684 1.415 31.546C3.72 45.009 7.148 48 12.141 48H223.9c4.804 0 8.511-3.22 9.438-8.207.359-1.928 3.478-19.226 1.395-31.556l.01-.01Z"
      />
      <Path
        fill="#B38650"
        d="M231.962 39.584c-.737 3.945-3.607 7.164-8.052 7.164H12.141c-4.445 0-7.195-2.722-8.062-7.164-1.236-6.369-2.632-21.292-1.396-31.178.568-4.531 4.166-7.164 8.611-7.164h213.443c4.455 0 7.933 3.03 8.621 7.154 1.764 10.552-.289 25.237-1.406 31.178l.01.01Z"
      />
      <Path
        fill="url(#b)"
        d="M4.069 21.193c1.804-.169 3.618-.308 5.422-.407 3.408-.17 6.816-.318 10.235-.398 6.677-.129 192.883-.109 199.52.636 4.903.557 9.777 1.332 14.67 2.007.259-4.968.19-10.174-.548-14.635-.688-4.124-4.166-7.154-8.621-7.154H11.294c-4.444 0-8.042 2.633-8.61 7.164-.479 3.845-.558 8.455-.409 13.016.638-.08 1.246-.18 1.794-.229Z"
        opacity={0.5}
        style={{
          mixBlendMode: "screen",
        }}
      />
      <Path
        fill="url(#c)"
        d="M218 21.64c-7.106-.705-193.78-.666-200.915-.427-3.399.11-6.817.199-10.216.487-1.524.129-3.05.268-4.574.407.259 6.945 1.056 13.712 1.784 17.487.867 4.442 3.618 7.164 8.062 7.164H223.9c4.445 0 7.315-3.22 8.053-7.164.618-3.298 1.525-9.31 1.913-15.798-5.292-.735-10.554-1.61-15.876-2.146l.01-.01Z"
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
          fill="#F2C26D"
          d="M226.541 6.369c1.355-.964 2.491-2.186 3.876-3.11a11.12 11.12 0 0 0-.518-.397c-1.226 1.38-2.591 2.642-3.946 3.944.189-.149.378-.288.578-.437h.01ZM22.197 6.558c.279 0 .558-.03.847-.04.02-.805.07-1.6.14-2.395.079-.775.149-1.55.288-2.315.03-.129.08-.347.14-.566h-1.694c-.06.964.16 1.947.14 2.921 0 .725-.11 1.64.129 2.395h.01ZM26.223 6.34c.827-.02 44.797-.04 45.625 0 .867.049 1.724.108 2.6.178a40.61 40.61 0 0 1 .808-5.276H25.765c.03 1.699.438 3.398.458 5.097ZM16.257 6.448c.1-.02.2-.03.299-.05 1.096-.109 2.192-.02 3.288.08.02-1.301-.259-2.633-.209-3.924.01-.448.03-.865.05-1.302h-5.172c.13.427.269.844.398 1.272.399 1.331.818 2.643 1.356 3.934l-.01-.01ZM14.055 7.283c-.33-.497-.718-.994-1.017-1.49-.419-.716-.837-1.431-1.266-2.127-.468-.785-.947-1.64-1.544-2.364-.28.02-.559.07-.828.119 1.136 2.176 3.09 3.944 4.216 6.1.14-.07.289-.149.439-.238ZM20.652 6.538l.698.03c-.2-.765-.13-1.61-.12-2.365.01-.974-.2-1.977-.16-2.961h-.587c-.05.845-.06 1.709-.04 2.544.02.914.19 1.828.2 2.752h.009ZM214.372 6.667c.329 0 .668-.01 1.027-.02.608-1.719.558-3.835 1.564-5.405h-1.913c-.349.944-.399 2.067-.568 3.02-.13.805-.249 1.6-.379 2.405h.269ZM228.953 10.015c-1.117.527-2.233 1.053-3.369 1.52.08.21.159.408.229.636.947-.228 1.894-.437 2.801-.725 1.106-.338 2.212-.715 3.348-.964.548-.119 1.107-.218 1.645-.347-.07-.587-.16-1.163-.24-1.73-.019-.099-.049-.198-.069-.307-.489.188-.957.417-1.435.636-.977.417-1.954.844-2.91 1.291v-.01ZM12.5 8.157c.11-.07.229-.139.348-.198.02 0 .04-.02.05-.03-1.116-2.266-3.17-4.064-4.325-6.32a8.425 8.425 0 0 0-1.585.607c1.326 1.48 2.641 3 4.066 4.401a20.877 20.877 0 0 1 1.445 1.53v.01ZM226.77 15.947c0 .06.02.13.04.179 0 .05.01.1.02.139h.049c2.043.1 4.096.179 6.139.209.329 0 .668.01 1.007.03 0-.388-.02-.786-.03-1.173-1.405.05-2.81.02-4.216.189-1.016.129-2.023.258-3.019.427h.01ZM223.232 8.167l.129.1c1.914-1.978 4.036-3.816 5.87-5.843a8.013 8.013 0 0 0-1.545-.695c-1.096 1.292-2.132 2.653-2.979 4.103-.469.785-.937 1.58-1.485 2.335h.01ZM216.276 6.637h.578c.478-1.788.857-3.795 1.813-5.395h-.707c-.658.755-.907 2.067-1.116 3.01-.18.795-.319 1.6-.578 2.385h.01ZM220.671 7.025c.239.06.468.119.707.208.598-1.033 1.097-2.086 1.705-3.1.618-1.013 1.445-1.897 2.122-2.871-.149 0-.299-.01-.458-.01h-1.425c-.459.874-.837 1.788-1.246 2.673a86.316 86.316 0 0 0-1.395 3.1h-.01ZM227.427 33.364s-.01.06-.01.08c.748.14 1.555.576 2.103.795 1.027.407 2.083.805 3.14 1.162.069-.427.129-.874.189-1.331a74.515 74.515 0 0 0-5.372-1.371c-.02.228-.03.447-.05.666ZM227.328 34.18c-.04.198-.06.397-.099.605.956.02 1.674.567 2.441 1.064.817.536 1.764.894 2.731 1.202.05-.288.09-.596.149-.904-1.026-.358-2.043-.736-3.059-1.103-.498-.18-1.435-.736-2.163-.865ZM10.875 36.345s.05-.03.08-.04c-.03-.168-.07-.327-.1-.486-.349.129-.688.367-.967.526-.697.378-1.425.726-2.152 1.063-1.236.597-2.492 1.163-3.737 1.769.03.14.06.278.08.397.04.21.089.388.129.587.837-.587 1.624-1.232 2.531-1.73 1.356-.744 2.78-1.35 4.136-2.096v.01ZM227.796 27.612c1.017-.12 2.123.407 3.07.636.847.208 1.734.417 2.591.645.03-.288.05-.596.08-.894-1.894-.367-3.807-.685-5.761-.695 0 .099.01.198.01.308h.01ZM227.627 23.25v.218c1.245 0 2.521 0 3.747.12.827.08 1.644.188 2.481.278.01-.268.03-.537.04-.815-2.083-.06-4.185.08-6.278.189l.01.01ZM8.812 16.434c0-.169-.01-.328-.02-.507-1.255-.129-2.521-.268-3.787-.357-.926-.06-1.853-.16-2.78-.1 0 .338 0 .686-.01 1.033 2.192-.159 4.415.07 6.607-.07h-.01ZM6.4 17.865c.818-.03 1.645-.11 2.462-.19v-.496c-2.212.13-4.445-.13-6.647.06v.904c1.375.09 2.83-.229 4.186-.278ZM8.742 13.592v-.199c.03-.586.09-1.291.3-1.947-1.047-.377-2.104-.705-3.17-1.053-1.066-.328-2.222-.606-3.299-.984a65.027 65.027 0 0 0-.269 3.587c1.924.169 3.827.318 5.74.537.14.02.4.04.698.06ZM9.012 26.539c-.03-.21-.05-.408-.08-.616-2.123.397-4.276.755-6.349 1.271.01.289.04.557.06.825 1.017-.328 2.143-.517 3.12-.735 1.086-.249 2.152-.527 3.239-.745h.01ZM9.769 31.159c-.01-.08-.03-.16-.04-.239-2.203.974-4.305 2.127-6.478 3.15.06.546.14 1.063.2 1.56a115.43 115.43 0 0 1 6.447-3.806c-.04-.228-.09-.447-.13-.675v.01Z"
          opacity={0.5}
        />
      </G>
      <Path
        fill="#996E44"
        d="M10.328 41.601c.887-1.033 1.684-2.106 2.491-3.19-1.883 1.382-3.827 2.674-5.74 4.035-.489.338-.967.695-1.465 1.023.518.775 1.146 1.431 1.883 1.928.22-.417.449-.835.728-1.242.638-.894 1.385-1.71 2.103-2.554ZM227.757 44.741c-.728-.477-1.555-.864-2.233-1.391-.408-.308-.777-.656-1.136-.994.399.547.807 1.103 1.236 1.64.478.626.967 1.232 1.425 1.878.05.07.1.139.14.208a7.207 7.207 0 0 0 1.465-.864c-.299-.15-.618-.288-.897-.467v-.01Z"
        opacity={0.7}
        style={{
          mixBlendMode: "multiply",
        }}
      />
      <Path
        fill="#FDF2D8"
        d="M7.258 7.83c.698.963.708 1.997.638 3.13-.19 3.04.04 6.12.14 9.16.02.656.04 1.312.08 1.957h217.608c.219-2.215.518-4.431.877-6.637.239-1.5.159-3.05.757-4.48.21-.488.479-.895.568-1.422.12-.685-.01-1.38.479-1.977.528-.666 1.455-1.44 2.442-1.42 1.295.04 2.152 1.261 2.561 2.553-.01-.1-.03-.209-.04-.308-.538-3.17-2.711-5.683-5.691-6.687 1.216.417 2.073 1.808 1.824 2.931-.319 1.371-1.764 1.63-3.129 1.62-2.831-.02-5.611.785-8.422.993-2.979.219-142.295.11-145.275-.08-2.93-.178-48.993-.486-51.913-.735-2.86-.228-5.75-.07-8.62-.139-1.864-.04-3.35-.626-4.356-2.096-.349-.507-.727-1.52-.279-2.087.08-.099.17-.188.27-.278C5.324 2.762 3.49 4.7 2.852 7.452c.24-.378.518-.735.887-1.043 1.345-1.133 2.81.407 3.518 1.4v.02Z"
        opacity={0.4}
        style={{
          mixBlendMode: "screen",
        }}
      />
      <Path
        fill="#FDF2D8"
        d="M11.384 8.932c-.907-1.41-2.253-2.523-3.518-3.716C7.218 4.61 6.5 4.004 5.952 3.33c-.08-.1-.17-.21-.249-.318a7.825 7.825 0 0 0-1.186 1.102c.797.477 1.585.984 2.332 1.47 1.595 1.014 3.279 1.998 4.535 3.35ZM225.236 8.336c1.026-.447 2.112-1.003 3.029-1.6.897-.596 1.694-1.34 2.611-1.907.23-.14.479-.259.718-.388a10.09 10.09 0 0 0-.618-.685c-.767.695-1.595 1.361-2.402 2.047-1.016.874-2.352 1.61-3.348 2.533h.01Z"
      />
      <Path
        fill="#815128"
        d="M230.907 41.105c-1.117.616-2.502-.04-3.1-.934-.468-.706-.199-1.61-.209-2.375-.01-.725.01-1.49-.05-2.226-.239.924-.379 1.878-.598 2.812-.08.358-.688.417-.807.05-.758-2.226-.788-4.491-.847-6.786-.06-2.276.04-4.56.199-6.826.04-.666.1-1.332.159-1.987H8.145c.13 2.553.33 5.107.628 7.67.22 1.898.2 3.805.24 5.713.04 1.749.129 4.193-2.014 5.097-1.156.477-2.043-.03-2.75-.954 1.016 3.975 3.697 6.39 7.883 6.39H223.89c4.116 0 6.877-2.753 7.854-6.29a3.885 3.885 0 0 1-.847.645h.01Z"
        opacity={0.4}
        style={{
          mixBlendMode: "multiply",
        }}
      />
      <Path
        fill="#FDF2D8"
        d="M9.41 43.966c.579-1.113.997-2.206 1.356-3.338-.369.397-.777.785-1.196 1.162-1.026.934-1.943 1.947-2.93 2.931a7.309 7.309 0 0 0 1.914 1.302c.249-.706.498-1.411.847-2.057h.01ZM226.302 42.078c-.648-.447-1.295-.824-2.053-1.113-.139-.05-.309-.139-.488-.218.149.169.299.348.468.507.498.546 1.067 1.013 1.595 1.55.807.824 1.305 1.818 2.063 2.662.05.06.099.11.149.16a7.223 7.223 0 0 0 1.625-1.332 160.184 160.184 0 0 1-3.349-2.226l-.01.01Z"
        opacity={0.5}
      />
      <Path
        fill="#F2C26D"
        d="M227.618 36.782c-.598 3.23-2.96 5.873-6.608 5.873H15.062c-3.648 0-5.9-2.236-6.598-5.873-1.007-5.226-2.163-17.457-1.146-25.564.468-3.707 3.418-5.873 7.066-5.873h207.324c3.647 0 6.498 2.494 7.066 5.872 1.445 8.645-.23 20.677-1.146 25.565h-.01Z"
      />
      <Path
        fill="#996E44"
        d="M228.763 11.217c-.548-3.328-3.308-5.782-6.866-5.862.747.537 3.906 2.107 4.275 2.912 1.206 2.672.409 11.128-1.495 13.264C220.98 25.684 33.1 24.333 27.29 24.184c-5.442-.15-17.6 2.206-16.694-7.551.13-1.441-1.016-5.246-1.494-6.638-.38-1.112 1.215-2.563 1.873-3.646.09-.159.2-.288.31-.417-2.124.874-3.658 2.692-3.977 5.285-1.007 8.108.14 20.35 1.146 25.565.707 3.637 2.95 5.873 6.597 5.873H221c3.647 0 6.009-2.643 6.607-5.873.917-4.888 2.601-16.93 1.146-25.564h.01Z"
        opacity={0.15}
        style={{
          mixBlendMode: "multiply",
        }}
      />
      <Path
        fill="#996E44"
        d="M228.763 11.217a6.948 6.948 0 0 0-2.521-4.322c.558.924 1.046 1.868 1.316 2.872.607 2.345.308 4.64-.359 6.945-1.764 5.952 3.308 11.456-2.99 14.526-5.153 2.494-206.347 3.18-211.48 0-5.81-3.607-2.69-8.793-4.086-14.804-.478-2.067-.967-4.203-1.026-6.32v-.278c-.15.438-.25.895-.31 1.381-1.006 8.108.14 20.35 1.147 25.565.707 3.637 2.95 5.873 6.597 5.873H221c3.647 0 6.009-2.643 6.607-5.873.917-4.888 2.601-16.93 1.146-25.564h.01Z"
        opacity={0.15}
        style={{
          mixBlendMode: "multiply",
        }}
      />
      <Path
        fill="#FDF2D8"
        d="M7.308 11.218c.15-1.66.698-3.2 2.013-4.422 1.565-1.45 3.598-1.848 5.77-1.918 4.994-.109 53.16-.168 58.163-.139 4.096.02 144.537-.04 148.633.17 3.897.268 6.438 2.97 6.887 6.309-.887-3.001-3.379-5.445-7.056-5.435-3.867.02-144.229.159-148.155.169-4.814.02-52.8-.01-57.604-.12-2.203-.06-4.306-.05-6.1 1.282-1.425 1.053-2.142 2.524-2.54 4.104h-.01Z"
      />
      <Path
        fill="#FDF2D8"
        d="M228.763 11.217c1.396 7.79.897 15.798-.249 23.598-.478 3.25-1.375 6.866-5.322 8.098-1.694.526-3.607.338-5.361.338l-143.93.01c-4.933.01-53.01.01-57.943-.02-1.495 0-2.95-.1-4.295-.765-1.983-1.004-3.11-2.902-3.598-4.83-.518-2.026-.707-4.162-.887-6.239-.2-2.146-.369-4.312-.448-6.468-.13-3.974-.14-7.959.348-11.913.08-.606.15-1.212.23-1.818-.399 7.839-.04 15.827 1.375 23.587.359 1.948.638 3.994 2.093 5.574 1.096 1.173 2.68 1.71 4.365 1.69 4.385-.04 51.923-.02 56.298-.04 2.552 0 141.409.01 143.96.02 2.163 0 4.485.218 6.627-.06 3.479-.457 4.714-3.647 5.213-6.3 1.495-7.968 2.391-16.255 1.534-24.322 0-.05-.01-.09-.02-.15l.01.01Z"
        opacity={0.5}
      />
      <Path
        fill="#FDF2D8"
        d="M18.16 8.714c-1.225-3.597-6.806.238-7.583 2.186-.26.655-.708 1.977-.19 2.633 1.136 1.43 4.375-.646 5.372-1.262 1.166-.736 2.89-2.097 2.402-3.547v-.01ZM22.387 7.74c-.878-.199-2.492.487-2.432 1.69.1 1.996 2.123.555 2.69-.369.489-.794.24-1.222-.258-1.33v.009Z"
      />
      <G fill="#996E44" filter="url(#d)">
        <Path d="M94.082 12.35c.757 0 1.276 1.103 1.575 3.309v1.013c0 .567-.858.994-2.582 1.272-2.392.676-3.578 1.133-3.578 1.381 0 .15-.03.268-.1.378 0 2.156.768 6.01 2.303 11.565v.179c0 .586-1.196 1.103-3.578 1.57-.817.298-1.485.457-2.023.457-.727 0-1.276-1.401-1.664-4.213-.429-1.64-.827-4.392-1.206-8.267 0-.317-.3-.625-.907-.904-1.445.12-2.86.18-4.246.18-.737 0-1.106-.577-1.106-1.74v-2.474c0-1.59.25-2.384.738-2.384.418-.06.757-.09 1.016-.09h.837c4.904 0 9.747-.397 14.54-1.202l-.02-.03ZM98.766 33.722h-.24c-.278.03-.508 0-.707-.1-1.096-.287-1.664-1.261-1.704-2.91-.06-2.534-.12-6.071-.19-10.592-.07-4.52.42-7.174 1.466-7.939.827-.149 1.704-.08 2.65.199.947.278 1.436.904 1.465 1.868.06 1.729.07 3.388.04 4.978a9.663 9.663 0 0 1 1.156-.566c.688-.269 1.306-.428 1.854-.468l.718-.04c2.392-.158 4.305.935 5.74 3.27.279.715.429 1.271.468 1.669.379 3-.139 6.319-1.574 9.965-.369.309-.738.477-1.106.497-2.592-.427-3.927-.934-4.007-1.51l-.06-.517c.848-3.408 1.226-5.564 1.117-6.468l-.04-.268c-.309-.984-.847-1.45-1.615-1.401h-.099c-1.376.1-2.352 1.4-2.94 3.925-.06 1.331-.02 3.16.119 5.504.05.368-.488.646-1.614.825-.01.05-.03.1-.04.149l-.867-.04.01-.03ZM120.173 18.292c3.867 0 6.528 2.027 7.973 6.09.13.925.189 1.49.189 1.68 0 2.255-1.126 4.212-3.378 5.882-1.834 1.003-3.309 1.51-4.425 1.51h-1.116c-2.213 0-4.176-1.033-5.9-3.09-1.007-1.381-1.515-2.941-1.515-4.68 0-3.01 1.684-5.276 5.063-6.826a8.53 8.53 0 0 1 3.099-.566h.01Zm-1.953 7.899c.259 1.798.907 2.693 1.963 2.693h.289c1.435-.497 2.163-1.55 2.163-3.16v-.378c-.279-1.808-.837-2.712-1.685-2.712h-.468c-.947 0-1.704.993-2.262 2.99v.567ZM138.531 32.57c-1.675.695-2.861 1.043-3.558 1.043h-.738c-1.435 0-2.73-.696-3.867-2.077-.657-.914-.986-1.957-.986-3.13.119-1.35.678-2.394 1.664-3.13.987-.735 2.243-1.162 3.757-1.271 1.515-.11 2.801.13 3.867.715.07-.645-.209-1.202-.837-1.669-.628-.467-1.405-.646-2.332-.536a8.5 8.5 0 0 0-2.741.814c-.897.438-1.704.279-2.401-.457-.698-.735-.549-1.5.458-2.275 1.007-.775 2.511-1.242 4.525-1.41 2.013-.17 3.607.019 4.783.546 1.186.536 2.013 1.34 2.472 2.424.458 1.083.807 2.384 1.036 3.895.23 1.51.369 3.13.419 4.848.05 1.72-.379 2.673-1.296 2.852-.917.179-1.754.228-2.491.14-.738-.09-1.326-.528-1.754-1.303l.02-.02Zm.777-19.952c.698.746 1.296 1.71 1.794 2.902.12.288-.01.526-.399.705-.767.358-1.554.686-2.382.964-.827.288-1.654.566-2.481.845-.17.06-.439 0-.807-.21-.549-.267-1.017-.705-1.396-1.33-.119-.2-.109-.358.03-.487 1.276-1.133 2.791-2.266 4.565-3.408.448-.269.807-.269 1.076.01v.01Zm-5.132 16.295c.239 1.212.857 1.819 1.863 1.819h.269c1.376-.328 2.053-1.044 2.053-2.127v-.248c-.269-1.222-.797-1.828-1.604-1.828h-.459c-.897 0-1.614.665-2.132 2.007v.377h.01ZM148.098 18.192c.189-3.16.668-4.828 1.455-5.007.199-.08.429-.11.708-.09h.239c1.734.04 2.571.298 2.521.795 0 1.5-.01 2.862-.01 4.084h.04c1.954-.06 3.249.318 3.907 1.123.169.645.179 1.341.03 2.096-.15.755-.578 1.163-1.306 1.212l-2.661.18c0 1.51.01 2.503.04 2.99.339 2.206 1.405 3.239 3.189 3.1 1.784-.14 2.572.904 2.362 3.14-.129 1.092-.797 1.639-2.013 1.639-2.212 0-3.996-.338-5.342-1.014-1.345-.675-2.242-1.937-2.681-3.765-.418-1.759-.607-3.647-.578-5.684-.458.05-.916.09-1.365.13-.937-.239-1.435-.904-1.485-2.007l-.03-.954c-.06-1.192.648-1.828 2.113-1.918.279-.02.568-.03.847-.04l.02-.01Z" />
      </G>
      <Path
        fill="#6F4B28"
        d="m35.711 11.973 14.401.725c.927.02 1.664.775 1.664 1.699l-.727 20.289c0 .924-.768 1.68-1.704 1.68l-13.644-.18a1.69 1.69 0 0 1-1.694-1.689V13.672c0-.934.757-1.69 1.694-1.69l.01-.01Z"
      />
      <Path
        fill="#F2C26D"
        d="M34.924 34.487a.78.78 0 0 0 .787.775l13.644.189a.781.781 0 0 0 .787-.785l.728-20.269a.788.788 0 0 0-.788-.785l-14.38-.735a.781.781 0 0 0-.788.785v20.815l.01.01Z"
      />
      <Path
        fill="#996E44"
        d="M35.79 23.697c.798.686 1.496.258 1.894-.566.479-.994.598-2.176.39-3.27.737.05 1.434.25 2.162.398.717.15 1.445.239 2.162.358a80.35 80.35 0 0 0 4.076.576c0 .606.02 1.222.1 1.828.13.944.349 2.296 1.256 2.852 1.116.685 2.103-.14 2.511-1.222.07-.199.13-.398.18-.606l-.379 10.611a.781.781 0 0 1-.787.785l-13.644-.189a.78.78 0 0 1-.787-.775V21.581c.14.775.329 1.649.857 2.106l.01.01Z"
        opacity={0.5}
        style={{
          mixBlendMode: "multiply",
        }}
      />
      <Path
        fill="#815128"
        d="M37.844 29.927c0 .328.259.586.588.586l7.703.139a.588.588 0 0 0 .589-.586l.548-13.602a.582.582 0 0 0-.588-.586l-8.252-.547a.582.582 0 0 0-.588.586v14.01Z"
      />
      <Path
        fill="#6B3F1D"
        d="m38.431 15.331 2.323.149c-.15.01-.28.02-.389.04-.28.06-.817.139-.947.467-.488 1.37-.658 7.75.349 8.793.409.427.897.517 1.465.646.857.199 1.624.685 2.482.874 1.036.229 2.172.15 2.401-1.083.35-1.858.618-7.472.708-8.356.03-.338 0-.606-.23-.864-.04-.05-.089-.09-.139-.14l.24.02c.328 0 .587.259.587.587l-.548 13.602c0 .328-.259.586-.588.586l-7.704-.14a.588.588 0 0 1-.588-.585v-14.01c0-.328.26-.586.588-.586h-.01Z"
      />
      <Path
        fill="#996E44"
        d="M38.073 26.111c.11.895-.19 3.13 1.236 3.1.358 0 4.893.209 5.71.09.598-.09 1.086-.447 1.266-1.053.229-.795.428-1.6.618-2.405l-.17 4.223c0 .328-.259.586-.588.586l-7.704-.14a.588.588 0 0 1-.588-.585v-5.932c.07.706.14 1.41.22 2.106v.01Z"
        opacity={0.5}
        style={{
          mixBlendMode: "multiply",
        }}
      />
      <Path
        fill="url(#e)"
        d="M37.844 29.927c0 .328.259.586.588.586l7.703.139a.588.588 0 0 0 .589-.586l.548-13.602a.582.582 0 0 0-.588-.586l-8.252-.547a.582.582 0 0 0-.588.586v14.01Z"
        style={{
          mixBlendMode: "multiply",
        }}
      />
      <Path
        fill="#6F4B28"
        d="M38.432 30.97a1.045 1.045 0 0 1-1.047-1.043v-14.01c0-.576.469-1.043 1.047-1.043l8.271.546a1.04 1.04 0 0 1 1.027 1.044l-.548 13.612a1.05 1.05 0 0 1-1.047 1.033l-7.703-.139Zm8.252-14.636-8.262-.546c-.07 0-.12.06-.12.13v14.009c0 .07.06.139.14.139l7.694.139c.07 0 .129-.06.129-.13l.548-13.611c0-.07-.06-.13-.14-.13h.01Z"
        opacity={0.5}
        style={{
          mixBlendMode: "multiply",
        }}
      />
      <Path
        fill="#6F4B28"
        d="M20.692 18.68c.618-.646 3.05-2.276 5.402-3.846 1.325-.894 2.58-1.729 3.269-2.235.887-.656 1.564-.964 2.112-.964.19 0 .37.04.538.12l.21.079c.21.07.448.159.688.318.777.407.777 1.54.777 1.917 0 1.043-.01 1.68-.03 2.047 5.98 1.053 9.896 2.98 10.066 3.07.15.08.249.238.249.407v6.975c0 .14-.06.269-.17.358l-.727.586c-.1.08-.23.12-.359.1-1.315-.209-2.78-.308-4.365-.308-1.953 0-3.677.159-4.704.278-.07.487-.22.854-.459 1.113-.279.486-1.146.973-1.245 1.023-.16.07-.33.11-.518.11-.698 0-1.436-.497-2.004-.944-.1-.07-.239-.19-.428-.328-1.684-1.292-6.16-4.72-7.674-6.25-1.714-1.739-1.824-2.345-.618-3.617l-.01-.01Z"
      />
      <Path
        fill="#B38650"
        d="M42.777 19.703s-4.186-2.206-10.455-3.309c0 0 .728-1.043.728-3.05 0-.924-.857-1.004-1.246-1.192-.448-.21-1.186.07-2.182.804-1.844 1.362-7.684 5.048-8.601 6.021-.917.974-1.047 1.292.618 2.981 1.654 1.69 7.125 5.833 8.052 6.548.558.427 1.445 1.043 2.053.775.19-.08.937-.576 1.057-.874.13-.328-.399-.467-.409-1.133 0 0 5.412-.904 10.385-.13l.727-.585-.727-6.856Z"
      />
      <Path
        fill="#F2C26D"
        d="M43.504 19.584s-4.146-2.057-10.344-3.09c0 0 .06-.547.06-2.425 0-1.878-.908-2.067-2.741-.785-1.824 1.272-7.614 4.73-8.521 5.644-.907.904-1.037 1.212.608 2.792 1.644 1.58 7.056 5.464 7.973 6.13.906.666 2.74 1.818 2.68-1.152 0 0 5.362-.855 10.285-.12V19.583Z"
      />
      <Path
        fill="#FDF2D8"
        d="M41.59 19.226c.628.258.967.437.967.437v1.093c-.309-.209-.667-.368-1.006-.507.04-.348.05-.685.04-1.033v.01ZM22.576 19.037c.847-.845 6.209-4.074 7.903-5.266 1.694-1.192 2.541-1.023 2.541.735 0 1.759-.06 2.276-.06 2.276a40.599 40.599 0 0 1 7.834 2.126c-.02.298-.06.656-.11 1.043-1.335-.467-2.71-.835-4.066-1.202-.788-.209-1.595-.437-2.392-.566-1.734-.259-1.475-.487-1.525-.885-.09-.795.359-3.16-.13-3.2-.986-.098-2.162.736-2.86 1.203-1.405.954-6.657 3.657-7.195 4.67-.13.258-.2.527-.22.785-.587-.755-.368-1.073.27-1.719h.01Z"
      />
      <Path
        fill="#F2C26D"
        d="M35.442 29.102s.269 3.746.448 4.253c.11.298.18.576 2.313.715 2.132.14 9.348.785 9.348.785s-10.176-.219-11.67-.298c-.42-.02-.569.07-.589-.686-.04-1.62.14-4.779.14-4.779l.01.01Z"
        opacity={0.7}
      />
      <Path
        fill="#FDF2D8"
        d="M50.52 16.066s.02-1.291 0-1.54c-.01-.248-.01-.616-1.116-.646-1.096-.03-12.906-.665-13.324-.665-.419 0-.748.119-.778.944-.03.824 0 1.798 0 1.798s.08-1.371.36-1.798c.268-.428.328-.487 1.434-.517 1.097-.03 11.71.686 12.259.695.548 0 .827-.357 1.176 1.74l-.01-.01Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={118.131}
        x2={118.131}
        y1={20.09}
        y2={1.47}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={1} stopColor="#F2C26D" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={118.091}
        x2={118.091}
        y1={23.429}
        y2={57.757}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#6F4B28" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={42.558}
        x2={42.558}
        y1={29.48}
        y2={15.748}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#6F4B28" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M.8 0h234.65v48H.8z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default IconButtonQuits
