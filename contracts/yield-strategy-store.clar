;; sBTC Yield Hub - Strategy Store
;; Allows users to save and retrieve their yield strategies onchain.
;; Each wallet (principal) can store one active strategy at a time.

(define-map saved-strategies
  principal
  {
    strategy: (string-utf8 500),
    saved-at: uint
  }
)

;; Save or update a strategy for the calling wallet
(define-public (save-strategy (strategy (string-utf8 500)))
  (ok (map-set saved-strategies
    tx-sender
    {
      strategy: strategy,
      saved-at: block-height
    }
  ))
)

;; Read a strategy for any wallet address — public and verifiable
(define-read-only (get-strategy (user principal))
  (map-get? saved-strategies user)
)

;; Delete your own strategy
(define-public (delete-strategy)
  (ok (map-delete saved-strategies tx-sender))
)
