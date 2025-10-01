// src/components/ui/Button.tsx

import type {ReactNode, CSSProperties} from 'react';

interface ButtonProps {
    children: ReactNode,
    onClick?: () => void,
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'default' | 'outline',
    disabled?: boolean,
    type?: 'button' | 'submit' | 'reset',
    size?: 'sm' | 'md' | 'lg' | string,
    className?: string,
    style?: CSSProperties // 👈 style props 추가
}

export default function Button({
                                   children,
                                   onClick,
                                   variant = 'primary',
                                   disabled = false,
                                   type = 'button',
                                   size = 'md',
                                   className,
                                   style // 👈 style props 추가
                               }: ButtonProps) {
    // 👇 모든 버튼이 공유할 기본 스타일
    const baseStyle =
        'inline-flex items-center justify-center text-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    // 👇 variant는 색상 관련 스타일
    const variantStyles = {
        primary:
            'bg-white text-indigo-600 hover:bg-indigo-50 active:bg-indigo-100 focus:ring-indigo-500',
        secondary:
            'text-white hover:bg-purple-700/20 active:bg-purple-800/30 focus:ring-white/20',
        danger:
            'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
        ghost:
            'bg-transparent text-current hover:bg-black/10 focus:ring-gray-400',
        default:
            'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500',
        outline:
            'bg-transparent border border-current text-current hover:bg-black/5 focus:ring-gray-400',
    };

    // 👇 size 스타일
    const sizeStyles = {
        sm: 'text-xs px-2 py-1 h-7',
        md: 'text-sm px-3 py-1.5 h-9',
        lg: 'text-base px-4 py-2 h-11',
    };

    // size가 string이고 정의된 size가 아닌 경우 기본값 사용
    const sizeStyle = typeof size === 'string' && size in sizeStyles
        ? sizeStyles[size as keyof typeof sizeStyles]
        : sizeStyles.md;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={style} // 👈 style props 전달
            // 🔥 className이 있으면 variant 스타일 무시, 없으면 variant 스타일 적용
            className={`${baseStyle} ${className ? '' : variantStyles[variant]} ${sizeStyle} ${className || ''}`}
        >
            {children}
        </button>
    );
}
