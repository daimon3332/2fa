/**
 * 组件样式模块
 */
export function getComponentStyles() {
	return `    .quick-2fa-section {
      margin-bottom: 24px;
    }

    .quick-2fa-panel {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: var(--radius-lg);
      box-shadow: var(--card-shadow);
      padding: 22px;
    }

    .quick-2fa-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 16px;
    }

    .quick-2fa-header h2 {
      color: var(--text-primary);
      font-size: 22px;
      line-height: 1.2;
      margin: 0 0 6px 0;
    }

    .quick-2fa-header p {
      color: var(--text-secondary);
      font-size: 14px;
      margin: 0;
    }

    .quick-2fa-form {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto auto;
      gap: 10px;
      align-items: center;
    }

    .quick-2fa-input {
      width: 100%;
      height: 48px;
      border: 2px solid var(--border-primary);
      border-radius: var(--radius-sm);
      background: var(--input-bg);
      color: var(--text-primary);
      font-size: 15px;
      font-family: monospace;
      padding: 0 14px;
      outline: none;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .quick-2fa-input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.14);
    }

    .readonly-secret-key {
      color: var(--text-secondary);
      cursor: not-allowed;
      background: var(--bg-secondary) !important;
    }

    .quick-2fa-btn {
      height: 48px;
      white-space: nowrap;
    }

    .quick-2fa-result {
      margin-top: 14px;
      padding: 14px;
      border-radius: var(--radius-sm);
      background: var(--bg-secondary);
      border: 1px solid var(--border-primary);
    }

    .quick-2fa-result-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .quick-2fa-code {
      color: var(--text-primary);
      font-family: monospace;
      font-size: 30px;
      letter-spacing: 8px;
      line-height: 1;
      cursor: pointer;
      user-select: none;
    }

    .quick-2fa-secret {
      color: var(--text-secondary);
      font-family: monospace;
      font-size: 13px;
      line-height: 1.4;
      word-break: break-all;
      margin-top: 8px;
    }

    .quick-2fa-history {
      margin-top: 16px;
    }

    .quick-2fa-history-title {
      color: var(--text-primary);
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .quick-2fa-history-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 10px;
    }

    .quick-2fa-history-card {
      background: var(--bg-secondary);
      border: 1px solid var(--card-border);
      border-radius: var(--radius-md);
      padding: 14px;
    }

    .quick-2fa-history-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      margin-bottom: 8px;
    }

    .quick-2fa-history-code {
      color: var(--text-primary);
      font-family: monospace;
      font-size: 26px;
      letter-spacing: 6px;
      line-height: 1;
      cursor: pointer;
      user-select: none;
    }

    .quick-2fa-history-secret {
      color: var(--text-secondary);
      font-family: monospace;
      font-size: 12px;
      word-break: break-all;
    }

    @media (max-width: 768px) {
      .quick-2fa-panel {
        padding: 16px;
      }

      .quick-2fa-form {
        grid-template-columns: 1fr;
      }

      .quick-2fa-code,
      .quick-2fa-history-code {
        font-size: 24px;
        letter-spacing: 5px;
      }
    }

    .secrets-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 10px;
      justify-content: center;
      margin: 0 auto;
    }

    .secret-card {
      background: var(--card-bg);
      border-radius: var(--radius-md);
      padding: 16px;
      padding-top: 20px;
      border: 1px solid var(--card-border);
      transition: all 0.3s ease;
      position: relative;
      width: 100%;
      box-shadow: var(--card-shadow);
      margin-bottom: 0;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-touch-callout: none;
    }

    .secret-card:hover {
      border-color: var(--card-hover-border);
      box-shadow: var(--card-hover-shadow);
    }

    .secret-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
    }

    .secret-info {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 8px;
    }

    .secret-info {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      flex: 1;
      min-width: 0;
    }

    .service-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-weight: bold;
      font-size: 16px;
      color: var(--text-secondary);
      background: var(--bg-secondary);
      border: 1px solid var(--card-border);
    }

    .service-icon img {
      width: 30px;
      height: 30px;
      object-fit: contain;
      border-radius: 6px;
    }

    .secret-text {
      flex: 1;
      min-width: 0;
    }

    .service-details {
      flex: 1;
      min-width: 0;
    }

    .card-menu {
      position: relative;
      cursor: pointer;
      padding: 8px;
      margin: -8px;
      border-radius: 6px;
      transition: background 0.2s ease;
    }

    .card-menu:hover {
      background: var(--bg-hover);
    }

    /* P1.6 手机端保证 ≥44px 触控面积（iOS HIG） */
    @media (max-width: 768px) {
      .card-menu {
        min-width: 44px;
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }

    .menu-dots {
      font-size: 20px;
      color: var(--text-secondary);
      line-height: 1;
      user-select: none;
    }

    .card-menu-dropdown {
      display: none;
      position: absolute;
      top: -8px;
      right: -8px;
      background: var(--menu-bg);
      border: 1px solid var(--menu-border);
      border-radius: var(--radius-sm);
      min-width: 80px;
      width: fit-content;
      box-shadow: var(--menu-shadow);
      z-index: 10000;
      overflow: hidden;
    }

    .card-menu-dropdown.show {
      display: block;
    }

    .menu-item {
      padding: 10px 14px;
      color: var(--text-primary);
      cursor: pointer;
      transition: background 0.2s ease;
      font-size: 14px;
      white-space: nowrap;
    }

    .menu-item:hover {
      background: var(--menu-item-hover);
    }

    .menu-item-danger {
      color: var(--danger) !important;
    }

    .menu-item-danger:hover {
      background: var(--danger-light) !important;
    }

    .secret-text h3 {
      color: var(--text-primary);
      font-size: 16px;
      font-weight: 600;
      margin: 0 0 1px 0;
      line-height: 1.3;
      word-break: break-word;
    }

    .secret-text p {
      color: var(--text-secondary);
      font-size: 13px;
      margin: 0;
      line-height: 1.4;
      word-break: break-word;
    }

    .secret-actions {
      display: flex;
      gap: 6px;
      flex-shrink: 0;
      margin-left: 8px;
    }

    .action-btn {
      background: none;
      border: 2px solid;
      border-radius: 8px;
      padding: 8px 12px;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      min-width: 60px;
    }

    .qr-btn {
      border-color: var(--qr-btn-color);
      color: var(--qr-btn-color);
    }

    .qr-btn:hover {
      background: var(--qr-btn-hover-bg);
      color: var(--btn-primary-text);
    }

    .edit-btn {
      border-color: var(--warning);
      color: var(--warning);
    }

    .edit-btn:hover {
      background: var(--warning);
      color: var(--btn-primary-text);
    }

    .delete-btn {
      border-color: var(--danger-dark);
      color: var(--danger-dark);
    }

    .delete-btn:hover {
      background: var(--danger-dark);
      color: var(--btn-primary-text);
    }

    .otp-preview {
      margin-top: 12px;
      padding: 0;
      background: none;
      border: none;
    }

    .otp-main {
      display: flex;
      align-items: center;
      gap: 16px;
      justify-content: space-between;
      /* Chrome兼容性修复 */
      display: -webkit-flex;
      -webkit-align-items: center;
      -webkit-justify-content: space-between;
    }

    .otp-code-container {
      flex: 1;
      min-width: 0;
      /* Chrome兼容性修复 */
      -webkit-flex: 1;
      -webkit-box-flex: 1;
    }

    .otp-code {
      font-family: -apple-system, BlinkMacSystemFont, 'SF Mono', 'SF Pro Display', monospace;
      font-size: 42px;
      font-weight: 300;
      color: var(--otp-text);
      letter-spacing: 6px;
      cursor: pointer;
      transition: all 0.2s ease;
      user-select: none;
      margin: 4px 0;
      line-height: 1.1;
      padding: 0;
      background: none;
      border: none;
      display: block;
      width: 100%;
      text-align: left;
    }

    .otp-code:hover {
      color: var(--text-secondary);
    }

    .otp-bottom {
      display: none;
    }

    .otp-next-container {
      text-align: right;
      cursor: pointer;
      transition: all 0.2s ease;
      padding: 6px 10px;
      border-radius: 8px;
      background: var(--otp-next-bg);
      flex-shrink: 0;
      min-width: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      /* Chrome兼容性修复 */
      -webkit-flex-shrink: 0;
      -webkit-box-flex: 0;
    }

    .otp-next-container:hover {
      background: var(--otp-next-bg-hover);
    }

    .otp-next-label {
      display: none;
    }

    .otp-next-code {
      font-family: -apple-system, BlinkMacSystemFont, 'SF Mono', monospace;
      font-size: 16px;
      font-weight: 600;
      color: var(--otp-next-text);
      letter-spacing: 2px;
      line-height: 1;
      display: block;
      white-space: nowrap;
      text-align: right;
    }

    .progress-mini {
      width: 60px;
      height: 4px;
      background: var(--border-primary);
      border-radius: 2px;
      overflow: hidden;
    }

    .progress-mini-fill {
      height: 100%;
      background: #8B5CF6;
      border-radius: 2px;
      transition: width 1s ease-in-out;
    }

    .progress-top {
      width: 100%;
      height: 1px;
      background: var(--bg-primary);
      border-radius: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }

    .progress-top-fill {
      height: 100%;
      background: var(--progress-fill);
      border-radius: 0;
      transition: width 1s linear, background-color 0.5s ease;
      width: 0%;
    }

    /* ========== 同步目标卡片 ========== */
    .dest-card {
      background: var(--bg-secondary);
      border: 1px solid var(--border-primary);
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 10px;
      transition: opacity 0.2s ease;
    }

    .dest-card-disabled {
      opacity: 0.55;
    }

    .dest-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .dest-card-info {
      flex: 1;
      min-width: 0;
    }

    .dest-card-name {
      display: block;
      font-weight: 600;
      font-size: 14px;
      color: var(--text-primary);
      margin-bottom: 2px;
    }

    .dest-card-url {
      display: block;
      font-size: 12px;
      color: var(--text-tertiary);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dest-card-status {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 8px;
    }

    .dest-status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .dest-status-dot-green {
      background: #22c55e;
    }

    .dest-status-dot-red {
      background: #ef4444;
    }

    .dest-status-dot-gray {
      background: #9ca3af;
    }

    .dest-status-text {
      font-size: 12px;
      color: var(--text-tertiary);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dest-card-actions {
      display: flex;
      gap: 8px;
    }

    .btn-sm {
      padding: 4px 12px;
      font-size: 12px;
      border-radius: 4px;
      cursor: pointer;
      border: 1px solid var(--border-primary);
      background: var(--bg-primary);
      color: var(--text-secondary);
      transition: all 0.2s ease;
    }

    .btn-sm:hover {
      background: var(--bg-hover, var(--bg-secondary));
    }

    .btn-danger-outline {
      border-color: var(--danger, #ef4444);
      color: var(--danger, #ef4444);
    }

    .btn-danger-outline:hover {
      background: var(--danger-light, rgba(239, 68, 68, 0.1));
    }

    /* 开关切换 */
    .dest-toggle {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 22px;
      flex-shrink: 0;
      margin-left: 10px;
    }

    .dest-toggle input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .dest-toggle-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #ccc;
      border-radius: 22px;
      transition: 0.3s;
    }

    .dest-toggle-slider:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 3px;
      bottom: 3px;
      background: white;
      border-radius: 50%;
      transition: 0.3s;
    }

    .dest-toggle input:checked + .dest-toggle-slider {
      background: var(--primary);
    }

    .dest-toggle input:checked + .dest-toggle-slider:before {
      transform: translateX(18px);
    }

    /* ========== 页面底部 Footer ========== */
    .page-footer {
      margin-top: 40px;
      padding: 15px 20px 20px 20px;
      background: var(--footer-bg);
      border-top: 1px solid var(--footer-border);
      text-align: center;
    }

    .footer-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .footer-links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
      flex-wrap: wrap;
    }

    .footer-link {
      color: var(--footer-link);
      text-decoration: none;
      font-size: 12px;
      transition: color 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }

    .footer-link:hover {
      color: var(--footer-link-hover);
    }

    .github-icon {
      vertical-align: middle;
      width: 14px;
      height: 14px;
    }

    .footer-separator {
      color: var(--border-secondary);
      font-size: 12px;
      user-select: none;
    }

    .footer-info {
      color: var(--text-tertiary);
      font-size: 11px;
      margin-top: 6px;
    }

    .footer-info a {
      color: var(--footer-link);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .footer-info a:hover {
      color: var(--footer-link-hover);
    }

    /* ========== 离线状态横幅 ========== */
    .offline-banner {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: var(--warning-dark);
      color: white;
      padding: 12px 20px;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
      z-index: 999; /* 低于操作菜单（1001），不会遮挡"+"按钮 */
      transform: translateY(-100%);
      transition: transform 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }

    .offline-banner.show {
      transform: translateY(0);
    }

    .offline-banner-icon {
      font-size: 20px;
    }

    .offline-banner-text {
      font-size: 14px;
      font-weight: 600;
    }

    /* 离线模式下的页面样式调整 */
    body.offline-mode {
      padding-top: 44px; /* 为离线横幅留出空间 */
    }

    body.offline-mode .secret-card {
      opacity: 0.95;
    }

    /* ========== 离线横幅响应式 ========== */

    /* 移动设备 */
    @media (max-width: 480px) {
      .offline-banner {
        padding: 10px 16px;
      }

      .offline-banner-icon {
        font-size: 18px;
      }

      .offline-banner-text {
        font-size: 13px;
      }

      body.offline-mode {
        padding-top: 40px;
      }
    }

    /* 超小屏幕 */
    @media (max-width: 360px) {
      .offline-banner {
        padding: 8px 12px;
      }

      .offline-banner-icon {
        font-size: 16px;
      }

      .offline-banner-text {
        font-size: 12px;
      }

      body.offline-mode {
        padding-top: 36px;
      }
    }

    /* 超宽屏幕 */
    @media (min-width: 1440px) {
      .action-menu-float {
        right: calc(32px + env(safe-area-inset-right, 0px));
      }
    }

`;
}
