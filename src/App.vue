<template>
	<div class="container">
		<router-view />
	</div>
</template>

<script setup lang="ts"></script>

<style>
*,
*::before,
*::after {
	box-sizing: border-box;
}
* {
	margin: 0;
	padding: 0;
	border: 0;
}

html {
	height: 100%;
	scroll-behavior: smooth;
}

a,
a:link,
a:visited {
	text-decoration: none;
	color: inherit;
}

a:hover {
	text-decoration: none;
	color: #999999;
}
nav {
	margin-bottom: 24px;
}
input {
	display: block;
	padding: 8px;
	font-family: inherit;
	font-size: 1rem;
	font-weight: 400;
	color: #212529;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #bdbdbd;
	border-radius: 8px;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
button {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #bdbdbd;
	border-radius: 8px;
	color: #fff;
	font-weight: bold;
	padding: 8px;
	cursor: pointer;
	color: #212529;
}
input:focus {
	color: #212529;
	background-color: #fff;
	border-color: #bdbdbd;
	outline: 0;
	box-shadow: 0 0 0 1px rgba(158, 158, 158, 0.25);
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	min-width: 1200px;
	color: #2c3e50;
	margin-top: 60px;
}

.container {
	max-width: 800px;
	margin: 0 auto;
}

.title {
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 24px;
}
</style>
