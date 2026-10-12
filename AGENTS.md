# Agent contract

- Research public information only and record the source URL and retrieval date.
- Treat every biography, product, role, image, and quotation as unverified until supported by a primary or authoritative source.
- Frank authorizes downloading media, including copyright or rights-unknown
  images, for private internal review. Store those binaries only under
  `inbox/media/private/`, which is gitignored. Never include them in a commit,
  PR, public catalogue or website deployment. Keep `local_path` null in public
  records and retain source and rights details. This authorization covers
  private review only; it does not grant public reuse rights. Do not bypass
  access controls or download protected/full-length video.
- Keep changes small, testable, and easy to review.
- Do not add secrets, personal data, or speculative claims.
- Open a PR for meaningful changes and describe the evidence used.
