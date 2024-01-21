FROM golang

WORKDIR /code

ENV HUGO_VERSION 0.116.1
ENV HUGO_BIN_NAME hugo_${HUGO_VERSION}_linux-arm64.tar.gz
ENV HUGO_BIN_URL https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BIN_NAME}

RUN wget -qO- "${HUGO_BIN_URL}" | tar xz

ENV PATH "/code:${PATH}"

CMD ["hugo", "version"]