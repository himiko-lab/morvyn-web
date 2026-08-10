interface LogoProps {
  className?: string;
  /** Sembunyikan tulisan "Morvyn", sisakan lambangnya saja. */
  markOnly?: boolean;
}

/**
 * Lambang Morvyn, ditanam sebagai SVG inline supaya ikut mewarisi ukuran teks
 * di sekitarnya dan tidak menambah satu permintaan jaringan.
 *
 * Bentuknya sama persis dengan `public/logo-morvyn.svg`; berkas di public
 * dipertahankan untuk keperluan Open Graph dan pemakaian di luar React.
 */
export function Logo({ className = "", markOnly = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="2100 3671 12466 9325"
        className="h-7 w-auto shrink-0"
        role="img"
        aria-label={markOnly ? "Morvyn" : undefined}
        aria-hidden={markOnly ? undefined : true}
      >
        {markOnly && <title>Morvyn</title>}
        <g transform="translate(-205.929658,-19902.166846)">
          <path
            d="M11688.596,31900C11688.596,29299.587 6100.629,23623.149 4228.596,23623C2356.564,23622.906 3559.896,32847.405 5803.93,32848C6984.44,32848 8539.263,31423 8539.263,31423C8539.263,31423 10094.304,32848 11274.596,32848C11615.81,32848.499 11688.554,32327.89 11688.596,31900Z"
            fill="#078DFB"
          />
        </g>
        <g transform="matrix(-1,0,0,1,16328.917235,-19902.166846)">
          <path
            d="M11144.917,31900C11144.917,29299.587 5556.95,23623.149 3684.917,23623C1812.885,23622.906 3016.217,32847.405 5260.251,32848C6440.761,32848 7995.584,31423 7995.584,31423C7995.584,31423 9550.625,32848 10730.917,32848C11072.131,32848.499 11144.875,32327.89 11144.917,31900Z"
            fill="#4D61F9"
            fillOpacity="0.85"
          />
        </g>
        <g transform="translate(0,-19902.166846)">
          <path
            d="M8333.333,28854C8452.039,28853.998 8459.389,29207.711 8742.718,29491.041C9026.047,29774.37 9383.001,29823.411 9383,29938C9383.001,30052.589 9026.047,30101.63 8742.718,30384.959C8459.389,30668.289 8452.039,31022.002 8333.333,31022C8214.627,31022.002 8207.278,30668.289 7923.949,30384.959C7640.62,30101.63 7283.666,30052.589 7283.667,29938C7283.666,29823.411 7640.62,29774.37 7923.949,29491.041C8207.278,29207.711 8214.627,28853.998 8333.333,28854Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
      {!markOnly && (
        <span className="text-lg font-extrabold tracking-tight">Morvyn</span>
      )}
    </span>
  );
}
