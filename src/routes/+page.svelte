<script lang="ts">
	import Logo from '$lib/assets/echo-consulting-logo.png';

	const EMAIL = 'consulting@echo.uib.no';
</script>

<div class="py-24 space-y-14 px-6 min-h-screen">
	<img src={Logo} alt="Echo Consulting Logo" class="w-auto mx-auto h-[min(35vw,160px)]" />

	<div class="space-y-4 max-w-screen-sm mx-auto text-center">
		<p class="text-balance">
			Har du et prosjekt som trenger dyktige utviklere? echo Consulting tilbyr konsulenttjenester
			innen IT og web-utvikling, uten at det koster deg skjorta.
		</p>

		<a
			class="relative px-4 border border-[#212121] rounded-md bg-[#181818] font-medium tracking-wide h-10 w-fit mx-auto flex items-center justify-center text-[#dedede] hover:bg-[#212121] transition-colors duration-200 hover:text-[#eeeeee] ease-in-out"
			href="mailto:{EMAIL}"
		>
			Ta kontakt
		</a>
	</div>
</div>
