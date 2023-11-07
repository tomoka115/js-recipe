const addbutton = document.getElementById("add-button")
const deletebutton = document.getElementById("delete-button")
const input = document.getElementById("memo-input")
const container = document.getElementById("memo-container")

let list = []

if (localStorage.list) {
  // 状態の更新 list: [] -> ["こんにちは"]
  list = JSON.parse(localStorage.list)

  // 状態の変化を画面に表示する
  for (const text of list) {
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = text
    container.append(card)
  }
}

addbutton.onclick = function () {
  const text = input.value

  // 状態の更新 list: ["こんにちは"] -> ["こんにちは", "こんばんは"]
  list.push(text)
  //↑textの内容をlist配列に追加。
  localStorage.list = JSON.stringify(list)
  //↑listの内容をLocalStorage内の"list"という名前のデータとして保存。データはJSON形式で保存される。

  // 状態の変化を画面に表示する
  const card = document.createElement("div")
  //↑新しい<div>要素を作成。この要素はメモのコンテンツを表示するためのコンテナとなる。この新しい要素はcardという名前の変数に格納される。
  card.className = "card"
  card.textContent = text
  //↑text変数に格納されているテキストを、新しい<div>要素(card要素)のテキストコンテンツとして設定。これにより新しいメモのテキストが<div>要素に表示される
  container.append(card)
  //↑<div>要素(card要素)をcontainerという要素に追加。通常containerはメモを表示するための親要素で、新しいメモが表示される場所。

  input.value = ""
  //↑入力フィールド(input)の値をクリア(空に設定)する操作。これにより、ユーザーがメモを入力した後、そのメモが追加されたら、入力フィールドが空になる
}

deletebutton.onclick = function () {
  // 状態の更新
  list = []
  localStorage.list = JSON.stringify(list)

  // 状態の表示
  container.textContent = ""
}
