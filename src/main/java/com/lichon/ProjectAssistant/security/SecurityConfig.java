package com.lichon.ProjectAssistant.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled=true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
		.antMatchers("/**").permitAll()
		.antMatchers("/admin").hasRole("ADMIN")
		.anyRequest().authenticated()
		.and().formLogin()
		.loginPage("/login")
        .and().logout().logoutUrl("/logout")
        .deleteCookies("logged_user").clearAuthentication(true).logoutSuccessUrl("/")
        .permitAll()
        .and().csrf().disable();
		
//		.and().httpBasic()
//		.and()
//		.sessionManagement().maximumSessions(1);
	}
}
