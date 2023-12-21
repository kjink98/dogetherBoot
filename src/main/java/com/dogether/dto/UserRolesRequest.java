package com.dogether.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRolesRequest {
	private String user_id;
    private String role;
}
